import colors from 'colors';
import * as readline from 'readline-sync';
import { createStore } from 'redux';

import chatReducers from './reducers';
import { addMessage, filterByUser } from "./actions";

// --- State Store ---

// Create a Redux store.
const store = createStore(chatReducers);

// Get the initial state.
console.log(store.getState());

// --- Subscribers ---

// Subscribe all dispatches and print the current state of the store.
const unsubscribe = store.subscribe(() => {
  let prefix = colors.blue('Store:');
  console.log(prefix, store.getState());

  const username = store.getState().uiReducer.filter;
  if (!username) {
    return;
  }
  prefix = colors.blue(`Filtered Messages by ${username}:`);
  const messages = store.getState().dataReducer.filter((msg) => msg.username === username);
  console.log(prefix, messages);
});

// --- Simple Chat App ---

// Get inputs from the user.
while (true) {
  // Write a message.
  const author = readline.question('author: ');
  const message = readline.question('message: ');
  store.dispatch(addMessage(author, message));

  // Filter messages.
  const username = readline.question('filter (username): ');
  store.dispatch(filterByUser(username));

  // Continue or quit.
  let cont = '';
  do {
    cont = readline.question('continue (Y|n): ').toLowerCase();
  } while (cont !== '' && cont !== 'n' && cont !== 'y');
  if (cont === 'n') {
    break;
  }
}

// --- Teardown ---

unsubscribe();

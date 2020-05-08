import * as readline from 'readline-sync';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { addMessage, filterByUser } from "./actions";
import chatReducers from './reducers';
import chatSagas from "./sagas";

// --- Initialization ---

const saga = createSagaMiddleware();

// Create a Redux store.
const store = createStore(
  chatReducers,
  applyMiddleware(saga),
);

saga.run(chatSagas);

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

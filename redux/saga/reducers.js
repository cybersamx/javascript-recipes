import { combineReducers } from 'redux';

import { ADD_MESSAGE, FILTER_BY_USER } from './actions';

// Separate data states (messages) from UI states (filter). Hence 2
// reducers and then use combineReducers to combine them into one.

function messages(state = [], action) {
  switch (action.type) {
    case ADD_MESSAGE:
      return [ ...state, {
        username: action.username,
        content: action.content,
      }];
    default:
      return state;
  }
}

function filter(state = {}, action) {
  switch (action.type) {
    case FILTER_BY_USER:
      return { ...state, username: action.username };
    default:
      return state;
  }
}

const chatReducers = combineReducers({
  messages,
  filter,
});

export default chatReducers;

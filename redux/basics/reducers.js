import { combineReducers } from 'redux';

import { ADD_MESSAGE, FILTER_BY_USER } from './actions';

// Set the inputs in the state.
function dataReducer(state = [], action) {
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

function uiReducer(state = {}, action) {
  switch (action.type) {
    case FILTER_BY_USER:
      return { ...state, filter: action.filter };
    default:
      return state;
  }
}

const chatReducers = combineReducers({
  dataReducer,
  uiReducer,
});

export default chatReducers;

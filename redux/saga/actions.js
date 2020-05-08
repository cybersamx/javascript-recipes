// --- Action Types (Strings) ---

export const ADD_MESSAGE = 'ADD_MESSAGE';
export const FILTER_BY_USER = 'FILTER_BY_USER';

// --- Action Creators ---

export function addMessage(username, content) {
  return {
    type: ADD_MESSAGE,
    username,
    content,
  };
}

export function filterByUser(username) {
  return {
    type: FILTER_BY_USER,
    username,
  };
}

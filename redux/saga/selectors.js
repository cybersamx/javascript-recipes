// Selectors are constructs that select a state in the Redux store.

export const getState = (state) => state;

export const getFilter = (state) => {
  return state.filter.username;
};

export const getMessages = (state) => {
  return state.messages;
}

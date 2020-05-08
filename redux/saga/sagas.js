import colors from 'colors';
import { all, select, take, takeEvery } from 'redux-saga/effects';

import { ADD_MESSAGE, FILTER_BY_USER } from './actions';
import * as selectors from './selectors';

export function* watchAddMessages() {
  while (true) {
    yield take(ADD_MESSAGE);
    const state = yield select(selectors.getState);
    let prefix = colors.blue('Store:');
    console.log(prefix, state);
  }
}

export function* watchFilterByUser() {
  while (true) {
    yield take(FILTER_BY_USER);
    const username = yield select(selectors.getFilter);

    if (!username) {
      return;
    }
    const prefix = colors.blue(`Filtered Messages by ${username}:`);
    const messages = yield select(selectors.getMessages);
    console.log(prefix, messages.filter((msg) => msg.username === username));
  }
}

export default function* chatSagas() {
  yield all([
    watchAddMessages(),
    watchFilterByUser(),
  ]);
}

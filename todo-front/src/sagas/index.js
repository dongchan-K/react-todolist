import { all, fork } from 'redux-saga/effects';
import { todoWatcherSaga } from './todoSaga';

export default function* rootSaga() {
  yield all([todoWatcherSaga()]);
}

import {
  loadTodoListAPI,
  insertTodoListAPI,
  checkTodoAPI,
} from '../lib/api/todos';
import { todoActionCreator } from '../modules/todos';
import createtodoWorkerSaga from '../lib/utils/createtodoWorkerSaga';
import { takeLatest } from 'redux-saga/effects';

const { loadTodo, insertTodo, checkTodo } = todoActionCreator;

// worker
const loadTodoWorkerSaga = createtodoWorkerSaga(loadTodo.type, loadTodoListAPI);

const insertTodoWorkerSaga = createtodoWorkerSaga(
  insertTodo.type,
  insertTodoListAPI,
);

const checkTodoWorkerSaga = createtodoWorkerSaga(checkTodo.type, checkTodoAPI);

// watcher
export function* todoWatcherSaga() {
  yield takeLatest(loadTodo.type, loadTodoWorkerSaga);
  yield takeLatest(insertTodo.type, insertTodoWorkerSaga);
  yield takeLatest(checkTodo.type, checkTodoWorkerSaga);
}

import {
  loadTodoListAPI,
  insertTodoListAPI,
  checkTodoAPI,
  removeTodoAPI,
} from '../lib/api/todos';
import { todoActionCreator } from '../modules/todos';
import createtodoWorkerSaga from '../lib/utils/createtodoWorkerSaga';
import { takeLatest } from 'redux-saga/effects';

const { loadTodo, insertTodo, checkTodo, removeTodo } = todoActionCreator;

// worker
const loadTodoWorkerSaga = createtodoWorkerSaga(loadTodo.type, loadTodoListAPI);

const insertTodoWorkerSaga = createtodoWorkerSaga(
  insertTodo.type,
  insertTodoListAPI,
);

const checkTodoWorkerSaga = createtodoWorkerSaga(checkTodo.type, checkTodoAPI);

const removeTodoWorkerSaga = createtodoWorkerSaga(
  removeTodo.type,
  removeTodoAPI,
);

// watcher
export function* todoWatcherSaga() {
  yield takeLatest(loadTodo.type, loadTodoWorkerSaga);
  yield takeLatest(insertTodo.type, insertTodoWorkerSaga);
  yield takeLatest(checkTodo.type, checkTodoWorkerSaga);
  yield takeLatest(removeTodo.type, removeTodoWorkerSaga);
}

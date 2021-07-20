import { configureStore } from '@reduxjs/toolkit';
import todosSlice from './todos';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';

// 리듀서 결합
const reducer = {
  todos: todosSlice.reducer,
};

// saga 미들웨어 생성
const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

// 스토어 생성
export const store = configureStore({
  reducer,
  middleware,
  devTools: true,
});

sagaMiddleware.run(rootSaga);

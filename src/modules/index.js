import { configureStore } from '@reduxjs/toolkit';
import todosSlice from './todos';

const reducer = {
  todos: todosSlice.reducer,
};

export const store = configureStore({
  reducer,
});

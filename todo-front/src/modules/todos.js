import { createSlice } from '@reduxjs/toolkit';

const todosInitialState = {
  todosArr: [
    {
      _id: 1,
      content: 'React 공부하기',
      isDone: false,
      date: '2021-07-18',
    },
    {
      _id: 2,
      content: 'TypeScript 공부하기',
      isDone: true,
      date: '2021-07-18',
    },
    {
      _id: 3,
      content: 'JavaScript 공부하기',
      isDone: true,
      date: '2021-07-18',
    },
  ],
  todosLodaing: false,
  todosError: null,
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState: todosInitialState,
  reducers: {
    loadTodoAction: (state, { payload }) => {
      state.todosLodaing = true;
      state.todosError = null;
    },
    loadTodoActionSuccess: (state, { payload: todos }) => {
      state.todosLodaing = false;
      state.todosArr = todos;
    },
    loadTodoActionFailure: (state, { payload: error }) => {
      state.todosLodaing = false;
      state.todosError = error;
    },
    insertTodoAction: (state, { payload }) => {
      state.todosLodaing = true;
      state.todosError = null;
    },
    insertTodoActionSuccess: (state, { payload: todos }) => {
      state.todosLodaing = false;
      state.todosArr = todos;
    },
    insertTodoActionFailure: (state, { payload: error }) => {
      state.todosLodaing = false;
      state.todosError = error;
    },
    checkTodoAction: (state, { payload }) => {
      state.todosLodaing = true;
      state.todosError = null;
    },
    checkTodoActionSuccess: (state, { payload: todos }) => {
      state.todosArr = todos;
    },
    checkTodoActionFailure: (state, { payload: error }) => {
      state.todosLodaing = false;
      state.todosError = error;
    },
  },
});

export const {
  loadTodoAction,
  loadTodoActionSuccess,
  loadTodoActionFailure,
  insertTodoAction,
  insertTodoActionSuccess,
  insertTodoActionFailure,
  checkTodoAction,
  checkTodoActionSuccess,
  checkTodoActionFailure,
} = todosSlice.actions;

export default todosSlice;

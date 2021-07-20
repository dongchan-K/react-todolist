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
    loadTodo: (state, { payload }) => {
      state.todosLodaing = true;
      state.todosError = null;
    },
    loadTodoSuccess: (state, { payload: todos }) => {
      state.todosLodaing = false;
      state.todosArr = todos;
    },
    loadTodoFailure: (state, { payload: error }) => {
      state.todosLodaing = false;
      state.todosError = error;
    },
    insertTodo: (state, { payload }) => {
      state.todosLodaing = true;
      state.todosError = null;
    },
    insertTodoSuccess: (state, { payload: todos }) => {
      state.todosLodaing = false;
      state.todosArr = todos;
    },
    insertTodoFailure: (state, { payload: error }) => {
      state.todosLodaing = false;
      state.todosError = error;
    },
    checkTodo: (state, { payload }) => {
      state.todosLodaing = true;
      state.todosError = null;
    },
    checkTodoSuccessr: (state, { payload: todos }) => {
      state.todosArr = todos;
    },
    checkTodoFailure: (state, { payload: error }) => {
      state.todosLodaing = false;
      state.todosError = error;
    },
  },
});

// 액션 생성자를 todoActionCreator로 내보냄
export const todoActionCreator = todosSlice.actions;

export default todosSlice;

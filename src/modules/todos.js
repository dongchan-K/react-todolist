import { createSlice } from '@reduxjs/toolkit';

const todosInitialState = {
  todosArr: [
    {
      id: 1,
      content: 'React 공부하기',
      isDone: false,
      date: '2021-07-18',
    },
    {
      id: 2,
      content: 'TypeScript 공부하기',
      isDone: false,
      date: '2021-07-18',
    },
  ],
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState: todosInitialState,
  reducers: {
    addTodo: (state, { payload: todos }) => {
      state.todosArr = [...state.todosArr, ...todos];
    },
    checkTodo: (state, { payload: todo }) => {
      state.todosArr = state.todosArr.map((todoItem) =>
        todoItem.id === todo.id
          ? { ...todoItem, isDone: !todoItem.isDone }
          : todoItem,
      );
    },
    removeTodo: (state, { payload: todo }) => {
      state.todosArr = state.todosArr.filter(
        (todoItem) => todoItem.id !== todo.id,
      );
    },
  },
});

export const { addTodo, checkTodo, removeTodo } = todosSlice.actions;

export default todosSlice;

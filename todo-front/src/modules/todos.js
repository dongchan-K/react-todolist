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
      isDone: true,
      date: '2021-07-18',
    },
    {
      id: 3,
      content: 'JavaScript 공부하기',
      isDone: true,
      date: '2021-07-18',
    },
  ],
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState: todosInitialState,
  reducers: {
    insertTodo: (state, { payload: todos }) => {
      state.todosArr = [
        ...state.todosArr,
        {
          ...todos,
          id: state.todosArr.length + 1,
        },
      ];
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

export const { insertTodo, checkTodo, removeTodo } = todosSlice.actions;

export default todosSlice;

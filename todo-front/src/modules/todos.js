import { createSlice } from '@reduxjs/toolkit';

const todosInitialState = {
  todosArr: [],
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
      state.todosArr = [...state.todosArr, todos];
    },
    insertTodoFailure: (state, { payload: error }) => {
      state.todosLodaing = false;
      state.todosError = error;
    },
    checkTodo: (state, { payload }) => {
      state.todosLodaing = true;
      state.todosError = null;
    },
    checkTodoSuccess: (state, { payload: todos }) => {
      state.todosLodaing = false;
      state.todosArr = state.todosArr.map((todosItem) =>
        todosItem._id === todos._id ? todos : todosItem,
      );
    },
    checkTodoFailure: (state, { payload: error }) => {
      state.todosLodaing = false;
      state.todosError = error;
    },
    removeTodo: (state, { payload }) => {
      state.todosLodaing = true;
      state.todosError = null;
    },
    removeTodoSuccess: (state, { payload: _id }) => {
      state.todosLodaing = false;
      state.todosArr = state.todosArr.filter(
        (todosItem) => todosItem._id !== _id,
      );
    },
    removeTodoFailure: (state, { payload: error }) => {
      state.todosLodaing = false;
      state.todosError = error;
    },
  },
});

// 액션 생성자를 todoActionCreator로 내보냄
export const todoActionCreator = todosSlice.actions;

export default todosSlice;

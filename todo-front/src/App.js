import React from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoHeader from './components/TodoHeader';
import TodoInfo from './components/TodoInfo';
import TodoList from './components/TodoList';
import TodoInsert from './components/TodoInsert';

const App = () => {
  return (
    <TodoTemplate>
      <TodoHeader />
      <TodoInfo />
      <TodoList />
      <TodoInsert />
    </TodoTemplate>
  );
};

export default App;

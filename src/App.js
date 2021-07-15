import React from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoHeader from './components/TodoHeader';
import TodoInfo from './components/TodoInfo';
import TodoList from './components/TodoList';
import TodoAdd from './components/TodoInsert';

const App = () => {
  return (
    <TodoTemplate>
      <TodoHeader />
      <TodoInfo />
      <TodoList />
      <TodoAdd />
    </TodoTemplate>
  );
};

export default App;

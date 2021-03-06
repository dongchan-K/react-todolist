import React, { useEffect } from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import { useSelector, useDispatch } from 'react-redux';
import { loadTodoListAPI } from '../lib/api/todos';
import { todoActionCreator } from '../modules/todos';

const TodoListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2rem 0;
  height: 350px;
  overflow-y: auto;
  h3 {
    color: #5db8f0;
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: 0.5rem;
    text-align: center;
    margin-bottom: 1.8rem;
  }
`;

const LeftList = styled.div`
  width: 50%;
  padding: 0 2rem;
  border-right: 3px dashed #e0ecff;
`;

const DoneList = styled.ul`
  width: 50%;
  padding: 0 2rem;
`;

const TodoList = () => {
  const { todos } = useSelector(({ todos }) => ({
    todos: todos.todosArr,
  }));
  const dispatch = useDispatch();

  const { loadTodo } = todoActionCreator;

  const leftTodos = todos.filter((todo) => todo.isDone === false);
  const doneTodos = todos.filter((todo) => todo.isDone === true);

  // todoList 서버에 요청
  useEffect(() => {
    dispatch(loadTodo());
  }, [dispatch, loadTodo]);

  return (
    <TodoListWrapper>
      <LeftList>
        <h3>LEFT</h3>
        <ul>
          {leftTodos.map((leftTodo) => (
            <TodoItem key={leftTodo._id} todoItem={leftTodo} />
          ))}
        </ul>
      </LeftList>
      <DoneList>
        <h3>DONE</h3>
        <ul>
          {doneTodos.map((doneTodo) => (
            <TodoItem key={doneTodo._id} todoItem={doneTodo} />
          ))}
        </ul>
      </DoneList>
    </TodoListWrapper>
  );
};

export default TodoList;

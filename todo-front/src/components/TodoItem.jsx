import React from 'react';
import styled, { css } from 'styled-components';
import { MdDone, MdDelete } from 'react-icons/md';
import { checkTodoAction } from '../modules/todos';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../lib/api/todos';

const TodoItemWrapper = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  .left-item {
    display: flex;
    align-items: center;
    width: 100%;
    cursor: pointer;
    transition: 0.3s all ease-in;
    /* .left-item 요소가 hover 시, .remove 요소의 opacity를 1로 변경 */
    &:hover ~ .remove {
      opacity: 1;
    }
  }
  .checkbox {
    width: 26px;
    height: 26px;
    font-size: 2.4rem;
    color: #458cff;
    outline: none;
    border: 1px solid #aaa;
    border-radius: 50%;
    background-color: #fff;
    ${(props) =>
      props.done &&
      css`
        border: 1px solid #458cff;
      `}
  }
  .content {
    font-size: 1.6rem;
    margin-left: 1rem;
  }
  .remove {
    width: 26px;
    height: 26px;
    font-size: 2rem;
    opacity: 0;
    background-color: #fff;
    cursor: pointer;
    transition: 0.3s all ease-in;
    &:hover {
      opacity: 1;
      color: #458cff;
    }
  }
`;

const TodoItem = ({ todoItem }) => {
  const { _id, content, isDone } = todoItem;
  const dispatch = useDispatch();

  const removeItem = () => {
    try {
      deleteTodo(_id);
    } catch (e) {
      console.log(e);
    }
  };

  const checkItem = () => {
    dispatch(checkTodoAction(todoItem));
  };

  return (
    <TodoItemWrapper done>
      <div className="left-item">
        <span className="checkbox" onClick={checkItem}>
          {isDone && <MdDone />}
        </span>
        <span className="content">{content}</span>
      </div>
      <button className="remove" onClick={removeItem}>
        <MdDelete />
      </button>
    </TodoItemWrapper>
  );
};

export default TodoItem;

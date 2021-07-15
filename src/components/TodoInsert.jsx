import React from 'react';
import styled, { css } from 'styled-components';

const TodoInsertForm = styled.form`
  position: absolute;
  display: flex;
  right: 4%;
  bottom: 4%;
  transform: translate(-4%, -4%);
  width: 300px;
  height: 48px;
  opacity: 0;
  transition: 0.5s all ease-in;
  ${(props) =>
    props.clicked &&
    css`
      right: 50%;
      bottom: 4%;
      transform: translate(50%, -4%);
      opacity: 1;
    `}
  input {
    padding: 1rem;
    flex: 1;
    border-radius: 1rem 0 0 1rem;
    border: 1.5px solid #aaa;
  }
  button {
    padding: 1rem;
    border: 1.5px solid #aaa;
    border-radius: 0 1rem 1rem 0;
    background-color: #aaa;
    font-size: 1.4rem;
    font-weight: 700;
    cursor: pointer;
  }
`;

const TodoInsert = () => {
  return (
    <TodoInsertForm clicked>
      <input type="text" placeholder="할 일을 입력하세요" />
      <button type="submit">추가</button>
    </TodoInsertForm>
  );
};

export default TodoInsert;

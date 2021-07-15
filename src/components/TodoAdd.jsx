import React from 'react';
import styled, { css } from 'styled-components';
import { MdAdd } from 'react-icons/md';

const TodoAddWrapper = styled.button`
  width: 48px;
  height: 48px;
  position: absolute;
  left: 50%;
  bottom: 4%;
  transform: translate(-50%, -4%);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  background-color: #458cff;

  color: #fff;
  outline: none;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  /* transition: 0.5s; */
  transition: 0.3s all ease-in;
  &:hover {
    background-color: #5db8f0;
  }

  ${(props) =>
    props.open &&
    css`
      background-color: #fc325e;
      &:hover {
        background-color: #ff7d99;
      }
      transform: translate(-50%, -4%) rotate(45deg);
    `}
`;

const TodoAdd = () => {
  return (
    <TodoAddWrapper>
      <MdAdd />
    </TodoAddWrapper>
  );
};

export default TodoAdd;

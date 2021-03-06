import React from 'react';
import styled, { css } from 'styled-components';
import { MdAdd } from 'react-icons/md';
import TodoModal from './TodoModal';
import useModal from '../hooks/useOpenModals';

const TodoAddWrapper = styled.button`
  width: 48px;
  height: 48px;
  position: absolute;
  right: 4%;
  bottom: 4%;
  transform: translate(-4%, -4%);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  background-color: #458cff;
  color: #fff;
  border-radius: 50%;
  cursor: pointer;
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

const TodoInsert = () => {
  const { modalState, openModal, closeModal } = useModal();

  return (
    <>
      <TodoAddWrapper onClick={openModal}>
        <MdAdd />
      </TodoAddWrapper>
      {modalState && <TodoModal closeModal={closeModal} />}
    </>
  );
};

export default TodoInsert;

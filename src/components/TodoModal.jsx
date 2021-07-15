import React from 'react';
import styled, { css } from 'styled-components';

const TodoInsertWrapper = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InsertModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 320px;
  min-height: 200px;
  background-color: #fff;
  border-radius: 1.5rem;
  form {
    width: 100%;
    padding: 0 2rem;
  }
  input {
    width: 100%;
    padding: 0.7rem 0;
    margin-top: 3rem;
    font-size: 1.5rem;
    border-bottom: 3px dashed #e0ecff;
    ::placeholder {
      color: #000;
    }
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 5rem;
`;

const StyledButton = styled.button`
  font-size: 1.5rem;
  color: #fff;
  background-color: #458cff;
  padding: 0.5rem 1.2rem;
  cursor: pointer;
  border-radius: 4px;
  transition: 0.3s all ease-in;
  &:hover {
    background-color: #5db8f0;
  }
  & + & {
    margin-left: 1.5rem;
  }
  ${(props) =>
    props.cancel &&
    css`
      background-color: #aaa;
      transition: 0.3s all ease-in;
      &:hover {
        background-color: #ccc;
      }
    `}
`;

const TodoModal = ({ visible }) => {
  // visible 값이 true일 경우만 모달 보여줌
  if (!visible) return null;

  return (
    <TodoInsertWrapper>
      <InsertModalWrapper>
        <form>
          <input placeholder="할 일을 입력해 주세요" />
          <ButtonWrapper>
            <StyledButton type="submit">추가</StyledButton>
            <StyledButton cancel>취소</StyledButton>
          </ButtonWrapper>
        </form>
      </InsertModalWrapper>
    </TodoInsertWrapper>
  );
};

export default TodoModal;

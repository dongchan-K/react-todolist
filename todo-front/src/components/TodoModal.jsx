import React from 'react';
import { useDispatch } from 'react-redux';
import styled, { css } from 'styled-components';
import useInputs from '../hooks/useInputs';
import { todoActionCreator } from '../modules/todos';
import dayjs from 'dayjs';

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
    padding: 1rem 0;
    margin-top: 3rem;
    font-size: 1.5rem;
    border-bottom: 3px dashed #e0ecff;
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

const TodoModal = ({ closeModal }) => {
  const dispatch = useDispatch();
  const { form, changeForm } = useInputs({
    id: null,
    content: null,
    isDone: false,
    date: dayjs().format('YYYY-MM-DD'),
  });

  const { insertTodo } = todoActionCreator;
  const { content } = form;

  // Todo 항목 추가
  const insertItem = async () => {
    // 할 일이 입력되지 않았다면 추가하지 않음
    if (!content) return;
    await dispatch(insertTodo(content));
    closeModal();
  };

  return (
    <TodoInsertWrapper onClick={closeModal}>
      {/* 이벤트 전파 방지를 통해 모달 바깥 영역과 취소 버튼에서만 모달 닫힘 */}
      <InsertModalWrapper onClick={(e) => e.stopPropagation()}>
        {/* form 태그 기본 동작 중단 */}
        <form onClick={(e) => e.preventDefault()}>
          <input
            name="content"
            placeholder="할 일을 입력해 주세요"
            onChange={(e) => changeForm(e)}
          />
          <ButtonWrapper>
            <StyledButton type="submit" onClick={insertItem}>
              추가
            </StyledButton>
            <StyledButton cancel onClick={closeModal}>
              취소
            </StyledButton>
          </ButtonWrapper>
        </form>
      </InsertModalWrapper>
    </TodoInsertWrapper>
  );
};

export default TodoModal;

import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

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
  return (
    <TodoListWrapper>
      <LeftList>
        <h3>LEFT</h3>
        <ul>
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
          {/* <TodoItem /> */}
        </ul>
      </LeftList>
      <DoneList>
        <h3>DONE</h3>
        <ul>
          <TodoItem done />
        </ul>
      </DoneList>
    </TodoListWrapper>
  );
};

export default TodoList;

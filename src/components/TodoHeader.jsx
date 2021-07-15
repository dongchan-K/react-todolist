import React from 'react';
import styled from 'styled-components';

const TodoHeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 3px dashed #e0ecff;
  h1 {
    font-size: 3rem;
    font-weight: 700;
    color: #458cff;
    letter-spacing: 0.5rem;
    margin: 2rem 0;
  }
`;

const TodoHeader = () => {
  return (
    <TodoHeaderWrapper>
      <h1>TODOLIST</h1>
    </TodoHeaderWrapper>
  );
};

export default TodoHeader;

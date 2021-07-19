import React from 'react';
import styled from 'styled-components';

const TodoInfoWrapper = styled.div`
  margin: 2rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font-size: 2rem;
    font-weight: 700;
    color: #aaa;
  }
  .date {
    margin-right: 0.5rem;
  }
`;

const TodoInfo = () => {
  return (
    <TodoInfoWrapper>
      <p className="date">
        {new Date().toLocaleDateString('ko-KR', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </p>
      <p className="day">
        {new Date().toLocaleDateString('ko-KR', { weekday: 'long' })}
      </p>
    </TodoInfoWrapper>
  );
};

export default TodoInfo;

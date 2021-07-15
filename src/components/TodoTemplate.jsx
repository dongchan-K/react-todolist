import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f7f7e9;
`;

const TodoTemplateWrapper = styled.div`
  position: relative;
  width: 712px;
  height: 568px;
  background-color: #fff;
  border-radius: 2rem;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.1);
`;

const TodoTemplate = ({ children }) => {
  return (
    <Wrapper>
      <TodoTemplateWrapper>{children}</TodoTemplateWrapper>
    </Wrapper>
  );
};

export default TodoTemplate;

import React from 'react';
import styled from 'styled-components';
import { inlineCode } from './inline-code.custom-element';

const Wrapper = styled.div`
  margin-top: 1.5rem;
  ul {
    margin: 0 1rem;
    li {
      list-style-type: decimal;
    }
  }
  code {
    ${inlineCode}
  }
`;

export const Ol = (props: any) => {
  return (
    <Wrapper>
      <ul {...props}>{props.children}</ul>
    </Wrapper>
  );
};

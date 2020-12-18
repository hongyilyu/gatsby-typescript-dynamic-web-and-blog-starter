import React from 'react';
import styled from 'styled-components';
import { inlineCode } from './inline-code.custom-element';

const Wrapper = styled.div`
  ul {
    margin-left: 20px;
    margin-top: 20px;
    padding-left: 2em;
    li {
      list-style: disc;
      margin-top: 10px;
    }
  }
  code {
    ${inlineCode}
  }
`;

export const Ul = (props: any) => {
  return (
    <Wrapper>
      <ul {...props}>{props.children}</ul>
    </Wrapper>
  );
};

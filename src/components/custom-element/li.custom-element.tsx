import React from 'react';
import styled from 'styled-components';
import { inlineCode } from './inline-code.custom-element';

export const StyledLi = styled.li`
  list-style-type: circle;
  margin-bottom: 0.5rem;
  word-break: break-word;
  line-height: 1.25;
  p {
    margin-top: 10px;
  }
  code {
    ${inlineCode}
  }
`;

export const Li = (props: any) => {
  return <StyledLi {...props}>{props.children}</StyledLi>;
};

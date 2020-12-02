import React from 'react';
import styled from 'styled-components';
import { inlineCode } from './inline-code.custom-element';

const StyledText = styled.p`
  font-size: 1.125rem;
  margin-top: 1.5rem;
  strong {
    font-weight: 700;
  }
  em {
    font-style: italic;
    code {
      ${inlineCode}
    }
  }
  img {
    width: 100%;
  }
  word-break: break-word;
`;

export const P = (props: any) => {
  const { children, ...rest } = props;
  return <StyledText {...rest}>{children}</StyledText>;
};

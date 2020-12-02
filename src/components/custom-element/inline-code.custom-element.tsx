import React from 'react';
import styled, { css } from 'styled-components';

export const inlineCode = css`
  padding: 0 3px;
  background-color: var(--colour-on-secondary, #e2e8f0);
  font-family: 'Menlo';
  border-radius: 0.125rem;
`;

const StyledText = styled.code`
  ${inlineCode}
`;

export const InlineCode = ({ children }: any) => {
  return <StyledText>{children}</StyledText>;
};

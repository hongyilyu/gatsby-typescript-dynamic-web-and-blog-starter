import React from 'react';
import styled from 'styled-components';

const StyledBlockquote = styled.blockquote`
  background-color: var(--colour-background-two, #edf2f7);
  border-left: 5px solid #4a5568;
  border-left-width: 9px;
  border-left-style: solid;
  padding: 20px 45px 20px 26px;
  margin: 1em 0 2em -1em;

  @media (min-width: 780px) {
    margin-left: -2em;
  }

  & p {
    margin-top: 15px;

    &:first-of-type {
      font-weight: 700;
      margin-top: 0;
    }

    &:nth-of-type(2) {
      margin-top: 0;
    }
  }
`;

export const Blockquote: React.FC = ({ children }) => {
  return <StyledBlockquote>{children}</StyledBlockquote>;
};

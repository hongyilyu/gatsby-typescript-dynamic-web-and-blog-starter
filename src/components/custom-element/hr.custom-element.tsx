import React from 'react';
import styled from 'styled-components';

const StyledHr = styled.hr`
  margin-top: 1.5rem;
  opacity: 0.5;
  color: var(--colour-secondary, #e2e8f0);
`;

export const Hr = (props: any) => {
  return <StyledHr {...props}>{props.children}</StyledHr>;
};

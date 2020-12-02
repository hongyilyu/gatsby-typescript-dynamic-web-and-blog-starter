import React from 'react';
import styled from 'styled-components';
import { AutoLink } from './linked-headers.custom-element';

const StyledH2 = styled.h2`
  font-size: 1.875rem;
  margin-top: 2rem;
  line-height: 1;
  font-weight: 500;
  ${AutoLink};
`;

export const H2 = (props: any) => {
  return <StyledH2 {...props}>{props.children}</StyledH2>;
};

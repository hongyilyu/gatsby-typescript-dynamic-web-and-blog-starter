import React from 'react';
import styled from 'styled-components';
import { AutoLink } from './linked-headers.custom-element';

const StyledH2 = styled.h2`
  border-top: 1px solid #ececec;
  padding-top: 2.1em;
  font-size: 1.875rem;
  margin-top: 2rem;
  line-height: 1;
  font-weight: 500;
  ${AutoLink};
`;

export const H2 = (props: any) => {
  return <StyledH2 {...props}>{props.children}</StyledH2>;
};

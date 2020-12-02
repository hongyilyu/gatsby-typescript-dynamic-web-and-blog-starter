import React from 'react';
import styled from 'styled-components';
import { AutoLink } from './linked-headers.custom-element';

const StyledH3 = styled.h3`
  font-size: 1.5rem;
  margin-top: 2rem;
  line-height: 1;
  font-weight: 500;
  ${AutoLink};
`;

export const H3 = (props: any) => {
  return <StyledH3 {...props}>{props.children}</StyledH3>;
};

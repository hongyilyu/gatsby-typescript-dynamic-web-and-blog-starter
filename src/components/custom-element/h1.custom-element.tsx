import React from 'react';
import styled from 'styled-components';
import { AutoLink } from './linked-headers.custom-element';

const StyledH1 = styled.h1`
  font-size: 2.25rem;
  font-family: 'Georgia';
  margin-top: 2rem;
  line-height: 1.25;
  font-weight: 500;
  ${AutoLink};
`;

export const H1 = (props: any) => {
  return <StyledH1 {...props}>{props.children}</StyledH1>;
};

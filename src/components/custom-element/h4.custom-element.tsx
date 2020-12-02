import React from 'react';
import styled from 'styled-components';
import { AutoLink } from './linked-headers.custom-element';

const StyledH4 = styled.h4`
  font-size: 1.25rem;
  margin-top: 1.5rem;
  line-height: 1;
  font-weight: 500;
  ${AutoLink};
`;

export const H4 = (props: any) => {
  return <StyledH4 {...props}>{props.children}</StyledH4>;
};

import React from 'react';
import styled from 'styled-components';
import { linkHover, linkStyle } from './shared-style.util';
import { inlineCode } from './inline-code.custom-element';

export const StyledA = styled.a`
  text-decoration: underline;
  ${linkStyle};
  ${linkHover};
  code {
    ${inlineCode}
  }
`;

export const A = (props: any) => {
  return (
    <StyledA {...props} href={props.href}>
      {props.children}
    </StyledA>
  );
};

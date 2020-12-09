import React from 'react';
import styled from 'styled-components';
import { inlineCode } from './inline-code.custom-element';

export const StyledA = styled.a`
  background-color: rgba(187, 239, 253, 0.3);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  text-decoration: none;
  color: inherit;

  code {
    ${inlineCode}
  }
  &:hover {
    background-color: #bbeffd;
    border-bottom-color: #1a1a1a;
  }
  &.anchor,
  &.gatsby-resp-image-link {
    background-color: transparent;
    border: none;
  }

  &.anchor.before {
    position: absolute;
    top: 64px;
    left: -1em;
  }
`;

export const A = (props: any) => {
  return (
    <StyledA {...props} href={props.href}>
      {props.children}
    </StyledA>
  );
};

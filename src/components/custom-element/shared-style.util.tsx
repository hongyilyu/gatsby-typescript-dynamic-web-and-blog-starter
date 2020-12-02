import { down } from 'styled-breakpoints';
import styled, { css } from 'styled-components';

export const CustomScroll = css`
  scrollbar-width: thin;
  scrollbar-color: var(--thumb-bg) var(--scrollbar-bg);
  &::-webkit-scrollbar {
    width: 15px;
  }
  &::-webkit-scrollbar-track {
    background: var(--scrollbar-bg);
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--thumb-bg);
    border-radius: 14px;
    border: 3px solid var(--scrollbar-bg);
  }
`;

export const focusOutline = css`
  outline: none;
  &:focus {
    box-shadow: '0 0 0 3px rgba(66, 153, 225, 0.5)';
    border-radius: '0.5rem';
  }
`;

export const linkStyle = css`
  color: inherit;
  &:visited {
    color: inherit;
  }
  ${focusOutline}
`;

export const linkHover = css`
  &:hover {
    transition: opacity 300ms;
    opacity: 0.5;
  }
`;

export const negMargin = css`
  margin-left: -3rem;
  margin-right: -3rem;
  ${down('sm')} {
    margin-left: -0;
    margin-right: -0;
  }
`;

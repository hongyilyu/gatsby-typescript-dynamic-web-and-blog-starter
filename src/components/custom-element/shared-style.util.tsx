import { Link } from 'gatsby';
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

export const LinkContainer = styled(Link)`
  background-color: rgba(187, 239, 253, 0.3);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  text-decoration: none;
  color: inherit;

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

// ICON style={{ margin: '0 0.25em 0 0' }}
export const IconSpaceStringSpanContainer = styled.span`
  vertical-align: middle;
  font-size: inherit;
  margin: 0 0.5em;
  margin-left: 0;
  display: inline-block;

  span {
    vertical-align: text-bottom;
  }
`;

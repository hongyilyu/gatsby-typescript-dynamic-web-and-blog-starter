import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { CustomScroll } from '../components/custom-element/shared-style.util';
import { themeVariables } from './theme';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  ${CustomScroll}
  ${themeVariables}
  *, *:before, *:after {
    box-sizing: border-box;
  }
  html {
    min-height: 100%;
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-family: '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      '"Noto Sans"',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      '"Noto Color Emoji"';
    font-size: 16px;
    margin-left: calc(100vw - 100%);
    margin-right: 0;
  }
  body {
    min-height: 100%;
    line-height: 1.625;
    letter-spacing: 0.025em;
    background: var(
      --colour-background,
      #f7fafc
    );
    color: var(
      --colour-on-background,
      #1a202c
    );
    -webkit-font-smoothing: antialiased;
  }
  [class$="mdx-embed"] {
    margin-top: 1.5rem;
  }
`;

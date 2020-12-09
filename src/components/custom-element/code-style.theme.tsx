// https://github.com/LekoArts/gatsby-themes/blob/master/themes/gatsby-theme-minimal-blog/src/styles/code.ts
import { css } from 'styled-components';
import 'victormono';

export const codeStyle = css`
  font-family: 'Victor Mono', 'Courier New', Courier, monospace;
  [data-name='live-editor'] {
    font-size: 1.5rem;
    font-weight: 400;
    textarea,
    pre {
      padding: 0.25rem !important;
    }
  }
  [data-name='live-preview'] {
    padding: calc(0.25rem + 10px) !important;
    background-color: #f56565;
  }
  .prism-code {
    font-size: 1.25rem;
    font-weight: 500;
    padding: 1.25rem;
    -webkit-overflow-scrolling: touch;
    background-color: transparent;
    overflow: initial;
    float: left;
    min-width: 100%;
    margin-bottom: 0;
    [data-linenumber='false'] {
      .token-line {
        padding-left: 3px;
      }
    }
  }
  .token {
    display: inline-block;
  }
  p > code,
  li > code {
    background: rgb(1, 22, 39);
    color: rgb(214, 222, 235);
    padding: 2px 1px;
    border-radius: 2px;
  }
  .gatsby-highlight {
    position: relative;
    margin-top: 1.5rem;
    -webkit-overflow-scrolling: touch;
    background: rgb(1, 22, 39);
    overflow: auto;
    border-radius: 2px;
    .token-line {
    }
    pre.language- {
      margin-top: 0;
    }
    pre.language-noLineNumbers {
      margin-top: 0;
    }
    pre[class*='language-']:before {
      background: white;
      border-radius: 0.25rem 0 0 0.25rem;
      color: black;
      font-size: 12px;
      -webkit-letter-spacing: 0.025rem;
      -moz-letter-spacing: 0.025rem;
      -ms-letter-spacing: 0.025rem;
      letter-spacing: 0.025rem;
      padding: 0.1rem 0.5rem;
      position: absolute;
      text-align: right;
      text-transform: uppercase;
      bottom: 1rem;
      right: 0;
    }
    pre[class~='language-javascript']:before,
    pre[class~='language-js']:before {
      content: 'js';
      background: #f7df1e;
      color: black;
    }
    pre[class~='language-jsx']:before {
      content: 'jsx';
      background: #61dafb;
      color: black;
    }
    pre[class~='language-ts']:before {
      content: 'ts';
      background: #61dafb;
      color: black;
    }
    pre[class~='language-tsx']:before {
      content: 'tsx';
      background: #61dafb;
      color: black;
    }
    pre[class~='language-html']:before {
      content: 'html';
      background: #005a9c;
      color: white;
    }
    pre[class~='language-xml']:before {
      content: 'xml';
      background: #005a9c;
      color: white;
    }
    pre[class~='language-svg']:before {
      content: 'svg';
      background: #005a9c;
      color: white;
    }
    pre[class~='language-graphql']:before {
      content: 'GraphQL';
      background: #e10098;
    }
    pre[class~='language-css']:before {
      content: 'css';
      background: #ff9800;
      color: black;
    }
    pre[class~='language-mdx']:before {
      content: 'mdx';
      background: #f9ac00;
      color: black;
    }
    pre[class~='language-text']:before {
      content: 'text';
    }
    pre[class~='language-shell']:before {
      content: 'shell';
    }
    pre[class~='language-sh']:before {
      content: 'sh';
    }
    pre[class~='language-bash']:before {
      content: 'bash';
    }
    pre[class~='language-yaml']:before {
      content: 'yaml';
      background: #ffa8df;
    }
    pre[class~='language-yml']:before {
      content: 'yml';
      background: #ffa8df;
    }
    pre[class~='language-markdown']:before {
      content: 'md';
    }
    pre[class~='language-json']:before,
    pre[class~='language-json5']:before {
      content: 'json';
      background: linen;
    }
    pre[class~='language-diff']:before {
      content: 'diff';
      background: #e6ffed;
    }
  }

  .line-number-style {
    display: inline-block;
    width: 2em;
    user-select: none;
    opacity: 0.3;
    text-align: center;
    position: relative;
  }
  .code-title {
    background-color: #a0aec0;
    color: black;
    font-size: 0.875rem;
    padding: 2px 6px;
    margin: 0;
  }
  [data-name='live-preview'],
  [data-name='live-editor'] {
    margin: 0 -3px;
  }
  .token-line {
    padding-right: 3px;
  }
  .highlight-line {
    background-color: rgb(2, 55, 81);
    border-left: 4px solid rgb(2, 155, 206);
    .line-number-style {
      width: calc(2em - 4px);
      opacity: 0.5;
      left: -2px;
    }
  }
`;

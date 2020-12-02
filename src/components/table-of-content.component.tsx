import React from 'react';
import styled from 'styled-components';
import { down } from 'styled-breakpoints';
import {
  CustomScroll,
  linkHover,
  linkStyle,
} from './custom-element/shared-style.util';
import { A } from './custom-element/a.custom-element';

export const Toc = styled.aside`
  position: sticky;
  left: calc(80% + 400px);
  top: 80px;
  max-height: 50vh;
  width: 310px;
  display: flex;
  flex-direction: column;
  box-shadow: var(--box-shadow-xl);
  border-radius: '0.25rem';
  padding: '0.75rem';
  margin: '0.75rem' 0;
  font-size: '1rem';
  * {
    width: 100%;
  }
  a {
    color: var(--colour-on-background, '#1a202c');
    text-decoration: none;
    ${linkStyle};
    ${linkHover};
  }
  ${down('sm')} {
    display: none;
  }
  h3 {
    margin: 0 '0.75rem';
    font-size: '1.5rem';
    padding: '0.25rem';
  }
  ul {
    overflow: hidden;
    overflow-y: auto;
    margin: '0.75rem';
    ${CustomScroll}
    &::-webkit-scrollbar {
      width: 11px;
    }
    &::-webkit-scrollbar-track {
      border-radius: 14px;
    }
  }
  li {
    padding: '0.25rem';
    line-height: 1.25;
    margin-bottom: '0.25rem';
    margin-right: '1rem';
  }
`;

const TableOfContent: React.FC<{ toc: any }> = ({ toc }) => {
  return (
    <>
      {typeof toc.items === 'undefined' ? null : (
        <Toc>
          <h3>Table of contents</h3>
          <ul>
            {toc.items.map((i: any) => (
              <li key={i.url}>
                <A href={i.url} key={i.url}>
                  {i.title}
                </A>
              </li>
            ))}
          </ul>
        </Toc>
      )}
    </>
  );
};

export default TableOfContent;

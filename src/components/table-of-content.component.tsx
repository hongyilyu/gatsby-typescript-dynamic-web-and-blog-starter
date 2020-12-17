import React from 'react';
import styled from 'styled-components';
import { down } from 'styled-breakpoints';
import {
  CustomScroll,
  linkHover,
  linkStyle,
} from './custom-element/shared-style.util';
import reset from 'styled-reset';
import { Link } from 'gatsby';

const TocWrapper = styled.div`
  position: absolute;
  height: 100%;
`;

const Toc = styled.div`
  ${reset};
  position: sticky;
  top: 30vh;
  max-height: 62vh;
  width: 310px;
  display: flex;
  flex-direction: column;
  box-shadow: var(--box-shadow-xl);
  border-radius: 0.25rem;
  padding: 0.75rem;
  margin: 0.75rem 0;
  font-size: 1rem;
  * {
    width: 100%;
  }
  a {
    color: var(--colour-on-background, #1a202c);
    text-decoration: none;
    ${linkStyle};
    ${linkHover};
  }
  ${down('sm')} {
    display: none;
  }
  h3 {
    margin: 0 0.75rem;
    font-size: 1.5rem;
    padding: 0.25rem;
  }
  ul {
    overflow: hidden;
    overflow-y: auto;
    margin: 0.75rem;
    ${CustomScroll}
    &::-webkit-scrollbar {
      width: 11px;
    }
    &::-webkit-scrollbar-track {
      border-radius: 14px;
    }
  }
  li {
    padding: 0.25rem;
    line-height: 1.25;
    margin-bottom: 0.25rem;
    margin-right: 1rem;

    &.depth-2 {
      &:first-of-type {
        margin-top: 0.25rem;
      }
      margin-left: 2rem;
      font-size: 0.8em;
      list-style: none;
    }
  }
`;

const TableOfContent: React.FC<{ toc: any }> = ({ toc }) => {
  return (
    <>
      {typeof toc.items === 'undefined' ? null : (
        <TocWrapper>
          <Toc>
            <h3>Table of contents</h3>
            <ul key={`first-ul`}>
              {toc.items.map((i: any) => (
                <li key={i.url}>
                  <Link to={i.url} id={i.url} key={i.url} target='_self'>
                    {i.title}
                  </Link>
                  {i.items &&
                    i.items.map((ii: any) => (
                      <ul key={`second-ul`}>
                        <li className={`depth-2`} key={ii.url}>
                          <Link
                            to={ii.url}
                            id={ii.url}
                            key={ii.url}
                            target='_self'
                          >
                            {`${ii.title}`}
                          </Link>
                        </li>
                      </ul>
                    ))}
                </li>
              ))}
            </ul>
          </Toc>
        </TocWrapper>
      )}
    </>
  );
};

export default TableOfContent;

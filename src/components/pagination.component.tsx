import React from 'react';
import styled, { css } from 'styled-components';
import * as _ from 'styled-components/cssprop';
import { LinkContainer } from './custom-element/shared-style.util';

const PaginationContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 2rem 0;
  padding: 16px 0;
  color: #9eabb3;
  text-align: center;
  width: 100%;
`;

const pageLink = css`
  color: inherit;
  padding: 16px;
  border: #bfc8cd 1px solid;
  text-decoration: none;
  border-radius: 4px;
  transition: border 0.3s ease;
  min-width: 200px;
  width: 100%;

  &:hover {
    color: rgb(136, 144, 147);
    border-color: rgb(152, 160, 164);
  }

  @media (min-width: 780px) {
    width: auto;
  }
`;

const Spacer = styled.div`
  display: none;

  &.previous {
    order: 2;
  }

  &.next {
    order: 3;
  }

  @media (min-width: 780px) {
    min-width: 200px;
    display: block;

    &.previous {
      order: 1;
    }
  }
`;

const pageLinkPrev = css`
  order: 2;

  @media (min-width: 780px) {
    order: 1;
  }
`;

const pageLinkNext = css`
  order: 3;
`;

const PageLabel = styled.span`
  order: 1;
  width: 100%;
  padding: 16px 0;

  @media (min-width: 780px) {
    order: 2;
    width: auto;
  }
`;

export interface PaginationLabel {
  name: string;
  url: string;
}

interface PaginationProps {
  next?: PaginationLabel;
  previous?: PaginationLabel;
  middleText?: string;
}

const TEXT_LENGTH = 15;

const Pagination: React.FC<PaginationProps> = ({
  next,
  previous,
  middleText,
}) => {
  const previousLabel =
    '← ' +
    ((previous && previous.name) || 'Previous Page').substring(0, TEXT_LENGTH);
  const nextLabel =
    ((next && next.name) || 'Next Page →').substring(0, TEXT_LENGTH) + ' →';
  return (
    <PaginationContainer>
      {previous ? (
        <LinkContainer
          css={`
            ${pageLink} ${pageLinkPrev}
          `}
          to={`/${previous.url}`}
        >
          {previousLabel}
        </LinkContainer>
      ) : (
        <Spacer className="previous" />
      )}
      <PageLabel>{middleText}</PageLabel>
      {next ? (
        <LinkContainer
          css={`
            ${pageLink} ${pageLinkNext}
          `}
          to={`/${next.url}`}
        >
          {nextLabel}
        </LinkContainer>
      ) : (
        <Spacer className="next" />
      )}
    </PaginationContainer>
  );
};

export default Pagination;

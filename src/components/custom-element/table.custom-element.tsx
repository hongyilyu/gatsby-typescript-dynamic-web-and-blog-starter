import React from 'react';
import styled from 'styled-components';

export const StyledTable = styled.table`
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
  font-size: 0.875rem;
  width: 100%;
  text-align: left;
  thead {
    font-size: 1rem;
    font-weight: 700;
    border: 1px solid #a0aec0;
    background-color: inherit;
  }
  th,
  td {
    border: 1px solid var(--colour-on-secondary, #cbd5e0);
  }
  th,
  td {
    padding-left: 0.5rem;
    padding-right: 0.75rem;
    padding-top: 0.5rem;
    padding-bottom: 0.25rem;
  }
  th,
  td {
    &:hover {
      background-color: var(--colour-on-secondary, #cbd5e0);
    }
  }
`;

export const Table = (props: any) => {
  return <StyledTable {...props}>{props.children}</StyledTable>;
};

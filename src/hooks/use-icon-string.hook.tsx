import React from 'react';
import { IconSpaceStringSpanContainer } from '../components/custom-element/shared-style.util';

const useIconSpace = (icon: JSX.Element, string: JSX.Element | string) => {
  return (
    <>
      <IconSpaceStringSpanContainer>
        {React.cloneElement(icon, {
          margin: '0 0.25em 0 0',
        })}{' '}
        <span>{string}</span>
      </IconSpaceStringSpanContainer>
    </>
  );
};

export default useIconSpace;

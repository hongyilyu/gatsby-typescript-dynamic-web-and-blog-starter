import React from 'react';
import styled from 'styled-components';

//@ts-ignore
import defaultBg from '../images/bg.jpg';

const WikiContainer = styled.div`
  background-color: #46c9e5;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  min-height: 300px;
  height: 50vh;
  display: table;

  &.small {
    max-height: 300px;
  }

  &.tiledBg {
    background-size: auto;
    background-repeat: repeat;
  }

  &.bottomRightBg {
    background-position: bottom right;
  }

  &.gradientOverlay {
    position: relative;
    z-index: -2;

    &:before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-image: linear-gradient(to bottom right, #46c9e5, #d26ac2);
      opacity: 0.6;
      z-index: -1;
    }
  }

  @media (min-width: 780px) {
    height: 70vh;
  }
`;

const WikiContent = styled.div`
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  font-weight: 700;
  color: #fff;
  padding: 0 2em;

  color: white;
  text-shadow: 1px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000,
    -1px 1px 0 #000, 1px 1px 0 #000;

  @media (min-width: 780px) {
    font-size: 1.2em;
  }

  h1 {
    font-size: 2em;
    line-height: 1.6em;
  }

  h2 {
    font-size: 1.5em;
    margin: 0.5em 0 0 0;
    line-height: 1.6em;
  }

  &.textOverlay > * > span {
    background: #000000c4;
    display: inline;
    padding: 0.2em;
    box-decoration-break: clone;
    -webkit-box-decoration-break: clone;
  }
`;

interface WikiTitleProps {
  backgroundImg?: string;
  className?: string;
}

const WikiTitle: React.FC<WikiTitleProps> = ({
  children,
  backgroundImg,
  className,
}) => {
  const backgroundImage = backgroundImg || defaultBg;

  return (
    <WikiContainer
      className={`bottomRightBg ${className}`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <WikiContent>{children}</WikiContent>
    </WikiContainer>
  );
};

export default WikiTitle;

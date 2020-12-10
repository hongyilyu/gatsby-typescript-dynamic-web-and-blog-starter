import React from 'react';
import { USER_IMG_URL, USER_PAGE_URL } from '../utils/url.utils';
import styled from 'styled-components';

const Container = styled.a`
  background: transparent !important;
  white-space: nowrap !important;
  color: #000 !important;

  &:hover {
    text-decoration: underline !important;
  }
`;

const ImgAvatar = styled.img`
  border-radius: 50%;
  width: 3em;
  height: 3em;
  vertical-align: middle;
  display: inline-block;
  margin: 0 0.5em 0 0;
  overflow: hidden;
`;

interface AvatarProps {
  name: string;
}
const Avatar: React.FC<AvatarProps> = ({ name }) => {
  return (
    <Container
      href={USER_PAGE_URL(name)}
      rel='nofollow noopener noreferrer'
      target='_blank'
    >
      <ImgAvatar alt={`${name}'s profile picture`} src={USER_IMG_URL(name)} />
    </Container>
  );
};

export default Avatar;

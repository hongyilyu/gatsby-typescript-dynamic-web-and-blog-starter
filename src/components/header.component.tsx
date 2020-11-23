import { Link } from 'gatsby';
import styled from 'styled-components';
import React from 'react';
import { getHeader } from '@mui-treasury/layout';
import {
  HeaderMockUp,
  //@ts-ignore
} from '@mui-treasury/mockup/layout';

const HeaderStyle = getHeader(styled);
const Header: React.FC = () => (
  <HeaderStyle>
    <HeaderMockUp />
  </HeaderStyle>
);

export default Header;

import styled from 'styled-components';
import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { DarkMode } from './dark-mode.component';
import { Search } from './search-bar';
import { Link } from '@reach/router';
import { WEB_PREFIX } from '../utils/url.utils';

const TypographyWrapper = styled(Typography)`
  font-weight: 900;
  min-width: 0;
  font-size: 18;
  color: var(--mui-text-secondary);
`;

const HeaderWrapper = styled(AppBar)`
  background-color: var(--mui-background-default);
  z-index: 1500;
  position: sticky;
`;

const Header: React.FC = () => (
  <HeaderWrapper>
    <Toolbar>
      <Link to={`${WEB_PREFIX}`} style={{ textDecoration: 'none' }}>
        <TypographyWrapper noWrap>LHY-iS-Learning</TypographyWrapper>
      </Link>
      <div style={{ flexGrow: 1 }} />
      <Search />
      <DarkMode />
    </Toolbar>
  </HeaderWrapper>
);

export default Header;

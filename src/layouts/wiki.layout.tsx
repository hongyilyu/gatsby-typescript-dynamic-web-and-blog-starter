import React from 'react';

import Layout, { Root } from '@mui-treasury/layout';

import Footer from '../components/footer.component';
import Header from '../components/header.component';
import BlogWrapper from './blog.wrapper';
import { GlobalStyle } from './global-style';

const scheme = Layout();

const WikiLayout: React.FC = ({ children }) => {
  return (
    <Root scheme={scheme}>
      <GlobalStyle />
      <Header />
      <BlogWrapper>{children}</BlogWrapper>
      <Footer />
    </Root>
  );
};

export default WikiLayout;

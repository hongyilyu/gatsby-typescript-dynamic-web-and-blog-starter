import React from 'react';
import Layout, { Root } from '@mui-treasury/layout';

import Footer from '../components/footer.component';
import Header from '../components/header.component';
import styled from 'styled-components';
import BlogWrapper from './blog.wrapper';

const scheme = Layout();

const Styles = styled.main`
  position: relative;
`;

const WikiLayout: React.FC = ({ children }) => {
  return (
    <BlogWrapper>
      <Root scheme={scheme}>
        <Styles>
          <Header />
          {children}
          <Footer />
        </Styles>
      </Root>
    </BlogWrapper>
  );
};

export default WikiLayout;

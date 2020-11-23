import React from 'react';

import Layout, { Root } from '@mui-treasury/layout';

import Footer from '../components/footer.component';
import Header from '../components/header.component';

const scheme = Layout();
const WikiLayout: React.FC = ({ children }) => {
  return (
    <Root scheme={scheme}>
      <Header />
      {children}
      <Footer />
    </Root>
  );
};

export default WikiLayout;

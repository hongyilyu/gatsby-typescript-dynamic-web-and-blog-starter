import React from 'react';

import Layout, { Root } from '@mui-treasury/layout';

import Footer from '../components/footer.component';
import Header from '../components/header.component';
import SEO from '../components/SEO';

const scheme = Layout();
interface WikiLayoutProps {
  title: string;
}
const WikiLayout: React.FC<WikiLayoutProps> = ({ title, children }) => {
  return (
    <Root scheme={scheme}>
      <SEO title={title} />
      <Header />
      {children}
      <Footer />
    </Root>
  );
};

export default WikiLayout;

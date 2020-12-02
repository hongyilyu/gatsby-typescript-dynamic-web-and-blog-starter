import React from 'react';
import Layout, { Root } from '@mui-treasury/layout';

import Footer from '../components/footer.component';
import Header from '../components/header.component';
import SEO from '../components/SEO';
import { theme } from './theme';

const scheme = Layout();
interface WikiLayoutProps {
  title: string;
}

const WikiLayout: React.FC<WikiLayoutProps> = ({ title, children }) => {
  return (
    <Root scheme={scheme} theme={theme(false)}>
      <SEO title={title} />
      <Header />
      <div style={{ scrollBehavior: 'smooth' }}>{children}</div>
      <Footer />
    </Root>
  );
};

export default WikiLayout;

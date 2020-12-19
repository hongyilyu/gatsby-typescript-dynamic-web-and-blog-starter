import React from 'react';
import styled from 'styled-components';

import CssBaseline from '@material-ui/core/CssBaseline';
import { getContent, getStandardScheme, Root } from '@mui-treasury/layout';

import Footer from '../components/footer.component';
import Header from '../components/header.component';
import SideBar from '../components/side-bar/side-bar.component';
import { GlobalStyle } from './global-style';
import { BottomFooter } from '../components/custom-element/shared-style.util';

const Content = getContent(styled);

const scheme = getStandardScheme();

scheme.configureEdgeSidebar((builder) => {
  builder
    .create('unique_id', { anchor: 'left' })
    .registerTemporaryConfig('xs', {
      width: 'auto', // 'auto' is only valid for temporary variant
    })
    .registerPermanentConfig('md', {
      width: 256, // px, (%, rem, em is compatible)
      collapsible: true,
      collapsedWidth: 64,
    });
});

scheme.enableAutoCollapse('unique_id', 'md');

const StandardLayout: React.FC = ({ children }) => {
  return (
    <Root scheme={scheme}>
      {({ state: { sidebar } }) => (
        <>
          <CssBaseline />
          <GlobalStyle />
          <Header />
          <div style={{ minHeight: `${BottomFooter}` }}>
            <SideBar sidebar={sidebar} />
            <Content>{children}</Content>
          </div>
          <Footer />
        </>
      )}
    </Root>
  );
};

export default StandardLayout;

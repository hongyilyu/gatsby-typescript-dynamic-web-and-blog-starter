import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import CssBaseline from '@material-ui/core/CssBaseline';
import { getContent, getStandardScheme, Root } from '@mui-treasury/layout';
import { RouteComponentProps } from '@reach/router';

import Footer from '../components/footer.component';
import Header from '../components/header.component';
import SideBar from '../components/side-bar/side-bar.component';
import { GlobalStyle } from './global-style';

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

type DashboardProps = RouteComponentProps<{ results: string }>;

const Dashboard: React.FC<DashboardProps> = ({ results = 2 }) => {
  const [person, setPerson] = useState();
  useEffect(() => {
    fetch(`https://randomuser.me/api?results=${results}`)
      .then((x) => x.json())
      .then((x) => setPerson(x));
  }, [results]);

  return (
    <Root scheme={scheme}>
      {({ state: { sidebar } }) => (
        <>
          <CssBaseline />
          <GlobalStyle />
          <Header />
          <SideBar sidebar={sidebar} />
          <Content>
            <div>
              <pre>{JSON.stringify(person, null, 2)}</pre>
            </div>
          </Content>
          <Footer />
        </>
      )}
    </Root>
  );
};

export default Dashboard;

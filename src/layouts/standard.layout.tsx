import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import {
  getCollapseBtn,
  getContent,
  getDrawerSidebar,
  getFooter,
  getHeader,
  getSidebarContent,
  getSidebarTrigger,
  getStandardScheme,
  Root,
} from '@mui-treasury/layout';
import {
  FooterMockUp,
  HeaderMockUp,
  NavContentMockUp,
  NavHeaderMockUp,
} from '@mui-treasury/mockup/layout';
import { RouteComponentProps } from '@reach/router';

const Header = getHeader(styled);
const DrawerSidebar = getDrawerSidebar(styled);
const SidebarTrigger = getSidebarTrigger(styled);
const SidebarContent = getSidebarContent(styled);
const CollapseBtn = getCollapseBtn(styled);
const Content = getContent(styled);
const Footer = getFooter(styled);

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
          <Header>
            <Toolbar>
              <SidebarTrigger sidebarId='unique_id' />
              <HeaderMockUp />
            </Toolbar>
          </Header>
          <DrawerSidebar sidebarId='unique_id'>
            <SidebarContent>
              <NavHeaderMockUp collapsed={sidebar.unique_id.collapsed} />
              <NavContentMockUp />
            </SidebarContent>
            <CollapseBtn />
          </DrawerSidebar>
          <Content>
            <div>
              <pre>{JSON.stringify(person, null, 2)}</pre>
            </div>
          </Content>
          <Footer>
            <FooterMockUp />
          </Footer>
        </>
      )}
    </Root>
  );
};

export default Dashboard;

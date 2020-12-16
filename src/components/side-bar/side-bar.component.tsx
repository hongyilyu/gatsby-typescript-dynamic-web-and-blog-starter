import {
  getDrawerSidebar,
  getSidebarTrigger,
  getSidebarContent,
  getCollapseBtn,
} from '@mui-treasury/layout';
import { SidebarStateById } from '@mui-treasury/layout/types';
import React from 'react';
import styled from 'styled-components';
import SideBarContent from './side-bar-content.component';
import SideBarHeader from './side-bar-header.component';

const DrawerSidebar = getDrawerSidebar(styled);
const SidebarTrigger = getSidebarTrigger(styled);
const SidebarContent = getSidebarContent(styled);
const CollapseBtn = getCollapseBtn(styled);
const SideBar: React.FC<{ sidebar: SidebarStateById }> = ({ sidebar }) => {
  return (
    <>
      <SidebarTrigger sidebarId='unique_id' />
      <DrawerSidebar sidebarId='unique_id'>
        <SidebarContent style={{ overflowX: 'hidden' }}>
          <SideBarHeader collapsed={sidebar.unique_id.collapsed} />
          <SideBarContent />
        </SidebarContent>
        <CollapseBtn />
      </DrawerSidebar>
    </>
  );
};

export default SideBar;

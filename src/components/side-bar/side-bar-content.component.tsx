import React, { useState } from 'react';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Folder from '@material-ui/icons/Folder';
import Settings from '@material-ui/icons/Settings';
import SideBarContentItem from './side-bar-content-item.component';

const list = [
  {
    primaryText: 'My Files',
    icon: <Folder />,
  },
];

const SideBarContent: React.FC<{ onClickItem?: (e: any) => void }> = ({
  onClickItem,
}) => {
  const [selected, setSelected] = useState(-1);
  return (
    <List>
      {list.map(({ primaryText, icon }, i) => (
        <SideBarContentItem
          primaryText={primaryText}
          icon={icon}
          onClickItem={onClickItem}
          currentSelection={selected}
          index={i}
        />
      ))}
      <Divider style={{ margin: '12px 0' }} />
      <SideBarContentItem
        primaryText={'Settings & account'}
        icon={<Settings />}
        onClickItem={onClickItem}
      />
    </List>
  );
};

export default SideBarContent;

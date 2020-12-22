import React, { useState } from 'react';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Settings from '@material-ui/icons/Settings';
import SideBarContentItem from './side-bar-content-item.component';
import DescriptionIcon from '@material-ui/icons/Description';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { Link } from '@reach/router';
import { WEB_PREFIX } from '../../utils/url.utils';

const list = [
  {
    primaryText: 'Posts',
    icon: <DescriptionIcon />,
    url: 'posts',
  },
  {
    primaryText: 'Dashboard',
    icon: <DashboardIcon />,
    url: 'app/dashboard',
  },
];

const SideBarContent: React.FC<{ onClickItem?: (e: any) => void }> = ({
  onClickItem,
}) => {
  const [selected, setSelected] = useState(-1);
  return (
    <List>
      {list.map(({ primaryText, icon, url }, i) => (
        <Link
          to={WEB_PREFIX ? `/${WEB_PREFIX}/${url}` : `/${url}`}
          style={{ textDecoration: 'none', color: 'inherit' }}
          key={i}
        >
          <SideBarContentItem
            primaryText={primaryText}
            icon={icon}
            onClickItem={onClickItem}
            currentSelection={selected}
            index={i}
          />
        </Link>
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

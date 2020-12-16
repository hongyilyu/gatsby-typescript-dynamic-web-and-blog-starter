import { ListItem, ListItemIcon, Icon, ListItemText } from '@material-ui/core';
import React from 'react';

const SideBarContentItem: React.FC<{
  primaryText: string;
  onClickItem?: (e: any) => void;
  icon: any;
  currentSelection?: number;
  index?: number;
}> = ({ primaryText, onClickItem, icon, index, currentSelection }) => {
  return (
    <ListItem
      key={primaryText}
      selected={index === currentSelection}
      button
      onClick={onClickItem}
    >
      <ListItemIcon>
        <Icon>{icon}</Icon>
      </ListItemIcon>
      <ListItemText
        primary={primaryText}
        primaryTypographyProps={{ noWrap: true }}
      />
    </ListItem>
  );
};

export default SideBarContentItem;

import React from 'react';
import useDarkMode from 'use-dark-mode';
import Brightness4OutlinedIcon from '@material-ui/icons/Brightness4Outlined';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import { IconButton } from '@material-ui/core';

export const DarkMode: React.FC = () => {
  const { toggle, value } = useDarkMode();
  return (
    <IconButton
      id='dark-mode-toggler'
      aria-label={value ? 'Switch to light mode' : 'Switch to dark mode'}
      onClick={toggle}
    >
      {value ? <Brightness7Icon /> : <Brightness4OutlinedIcon />}
    </IconButton>
  );
};

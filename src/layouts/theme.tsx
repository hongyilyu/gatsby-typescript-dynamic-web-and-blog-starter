import { createMuiTheme } from '@material-ui/core';

export const theme = (dark: boolean) =>
  createMuiTheme({
    palette: { type: dark ? 'dark' : 'light' },
  });

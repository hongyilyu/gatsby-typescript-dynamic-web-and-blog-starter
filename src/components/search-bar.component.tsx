import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import useDarkMode from 'use-dark-mode';
import styled from 'styled-components';

const SearchWrapper = styled.div`
  position: relative;
  border-radius: 4px;
  margin-left: 4px;
  width: auto;
  background-color: ${({ dark }: { dark: boolean }) =>
    dark ? `var(--mui-background-default)` : '#eeeeee'};
  &:hover {
    background-color: ${({ dark }: { dark: boolean }) =>
      dark ? `var(--mui-background-paper)` : '#e0e0e0'};
  }
`;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {},
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  })
);

export default function SearchAppBar() {
  const { value } = useDarkMode();
  const classes = useStyles();

  return (
    <SearchWrapper dark={value}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder='Search…'
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ 'aria-label': 'search' }}
      />
    </SearchWrapper>
  );
}

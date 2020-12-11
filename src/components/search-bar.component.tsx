import React, { useEffect, useState } from 'react';
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

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: Function;
  setSearchResults: Function;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchQuery,
  setSearchQuery,
  setSearchResults,
}) => {
  const { value } = useDarkMode();
  const classes = useStyles();
  const search = (searchQuery: string) => {
    if (searchQuery.length < 3 || !window.__LUNR__) return [];
    const results = window.__LUNR__.en.index.search(searchQuery);
    const posts = results.map(({ ref }: any) => window.__LUNR__.en.store[ref]);
    setSearchResults(posts);
    return posts;
  };
  useEffect(() => {
    search(searchQuery);
  }, [searchQuery]);

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
        onChange={(e) => {
          if (e.target.value) setSearchQuery(e.target.value);
        }}
      />
    </SearchWrapper>
  );
};

export default SearchBar;

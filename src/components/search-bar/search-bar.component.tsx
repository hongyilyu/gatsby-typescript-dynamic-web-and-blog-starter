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
      width: '20ch',
      '&:focus': {
        width: '400px',
      },
    },
  })
);

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: Function;
  setSearchResults: Function;
  setBlur: Function;
}

declare global {
  interface Window {
    __LUNR__: any;
  }
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchQuery,
  setSearchQuery,
  setSearchResults,
  setBlur,
}) => {
  const { value } = useDarkMode();
  const classes = useStyles();
  const getPositions = (searchResult: any, field: any) => {
    let positions: any[] = [];
    if (searchResult.matchData && searchResult.matchData.metadata) {
      const data = searchResult.matchData.metadata;
      Object.keys(data).forEach((searchTerm) => {
        if (data[searchTerm][field] && data[searchTerm][field].position) {
          positions = positions.concat(data[searchTerm][field].position);
        }
      });
    }
    return positions;
  };

  const search = (searchQuery: string) => {
    if (searchQuery.length < 3 || !window.__LUNR__) return [];
    const results = window.__LUNR__.en.index.search(searchQuery);

    const searchResults = results.map((searchResult: any) => {
      const doc = window.__LUNR__.en.store[searchResult.ref];
      return {
        titlePos: getPositions(searchResult, 'title'),
        bodyPos: getPositions(searchResult, 'content'),
        ...doc,
      };
    });
    setSearchResults(searchResults);
    return searchResults;
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
        onBlur={() => setBlur(true)}
        onFocus={() => setBlur(false)}
      />
    </SearchWrapper>
  );
};

export default SearchBar;

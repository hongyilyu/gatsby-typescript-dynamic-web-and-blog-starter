import { Paper } from '@material-ui/core';
import React from 'react';
import SearchDropdownItem from './search-dropdown-item.component';

const SearchDropdown: React.FC<{ searchResults: any[] }> = ({
  searchResults,
}) => {
  return (
    <Paper elevation={3}>
      {searchResults.map((res) => (
        <SearchDropdownItem result={res} />
      ))}
    </Paper>
  );
};

export default SearchDropdown;

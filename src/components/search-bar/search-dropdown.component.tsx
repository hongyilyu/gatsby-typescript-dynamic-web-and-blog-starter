import { Paper } from '@material-ui/core';
import React from 'react';
import SearchDropdownItem from './search-dropdown-item.component';

const SearchDropdown: React.FC<{ searchResults: any[] }> = ({
  searchResults,
}) => {
  console.log(searchResults);
  return (
    <Paper
      style={{
        position: 'absolute',
        background: 'none',
        padding: '0 10px',
        marginTop: '10px',
        width: 476,
      }}
    >
      {searchResults.map((res, index) => (
        <SearchDropdownItem result={res} key={index} />
      ))}
    </Paper>
  );
};

export default SearchDropdown;

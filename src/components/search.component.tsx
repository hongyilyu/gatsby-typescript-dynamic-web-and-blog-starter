import React, { useState } from 'react';
import SearchBar from './search-bar.component';
import SearchDropdown from './search-dropdown.component';

const Search: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchResults, setSearchResults] = useState<any>([]);
  return (
    <div>
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setSearchResults={setSearchResults}
      />
      {searchQuery.length > 3 && (
        <SearchDropdown searchResults={searchResults} />
      )}
    </div>
  );
};

export default Search;

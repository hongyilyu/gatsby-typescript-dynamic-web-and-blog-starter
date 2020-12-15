import React, { useState } from 'react';
import SearchBar from './search-bar.component';
import SearchDropdown from './search-dropdown.component';

const Search: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchResults, setSearchResults] = useState<any>([]);
  const [blur, setBlur] = useState(true);
  return (
    <div>
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setSearchResults={setSearchResults}
        setBlur={setBlur}
      />
      {searchQuery.length > 3 && !blur && (
        <SearchDropdown searchResults={searchResults} />
      )}
    </div>
  );
};

export default Search;

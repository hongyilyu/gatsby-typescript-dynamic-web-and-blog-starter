import React, { useState } from 'react';
import SearchBar from './search-bar.component';
import { SearchResult } from './search-bar.type';
import SearchDropdown from './search-dropdown.component';

const Search: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [blur, setBlur] = useState(true);
  return (
    <div>
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setSearchResults={setSearchResults}
        setBlur={setBlur}
      />
      {searchQuery.length > 2 && !blur && (
        <SearchDropdown searchResults={searchResults} />
      )}
    </div>
  );
};

export default Search;

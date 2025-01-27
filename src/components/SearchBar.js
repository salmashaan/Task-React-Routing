import React from "react";
// Styling

const SearchBar = (props) => {
  const checkLength = (string) => {
    if (string.length >= 2) props.setQuery(string);
    else props.setQuery("");
  };

  return (
    <input
      className="searchBar"
      onChange={(event) => checkLength(event.target.value)}
      placeholder="Search for a movie name"
    />
  );
};

export default SearchBar;

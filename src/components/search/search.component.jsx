import React from "react";
import "./search.styles.css";

const Search = ({ handleChange }) => {
  return (
    <input
      className="search"
      type="search"
      placeholder="Search here"
      onChange={handleChange}
    />
  );
};

export default Search;

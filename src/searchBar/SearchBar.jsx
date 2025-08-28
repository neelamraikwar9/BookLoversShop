import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import './search.css';

const searchBar = ({ value, changeInput }) => {
  return (
    <div className="searchBar-wrap">
      <SearchIcon className="searchBar-icon" />
      <input
        type="text"
        placeholder="Type to find bookLovers Book"
        value={value}
        onChange={changeInput}
      />
    </div>
  );
};

export default searchBar;

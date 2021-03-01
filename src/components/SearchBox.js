import React from "react";

function SearchBox({ handleSearchChange }) {
  return (
    <div className="searchbox d-flex justify-content-center">
      <form className="form-inline">
        <input
          className="form-control"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={handleSearchChange}
        />
      </form>
    </div>
  );
}

export default SearchBox;

import React from "react";

function SearchBox() {
  return (
    <div className="searchbox">
      <form className="form-inline">
        <input
          className="form-control"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange=""
        />
      </form>
    </div>
  );
}

export default SearchBox;

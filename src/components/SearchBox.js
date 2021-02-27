import React from "react";

function SearchBox({ handleClick }) {
  return (
    <div className="searchbox d-flex justify-content-center">
      <form className="form-inline">
        <input
          className="form-control"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button
          type="button"
          className="btn btn-light search-button"
          onClick={handleClick}
        >
          search
        </button>
      </form>
    </div>
  );
}

export default SearchBox;

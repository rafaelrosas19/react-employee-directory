import React from "react";
import SearchBox from "./SearchBox";

function Nav({ handleSearchChange }) {
  return (
    <>
      <nav className="navbar">
        <div className="container d-flex justify-content-center">
          <div className="navbar-brand ms-auto fas fa-users">
            <span className="navemp"> Employee Directory </span>
            <br></br>
            <span className="navsub">
              Click on carrots to filter by heading or use the search box to
              narrow your results.
            </span>
          </div>
        </div>
      </nav>
      <SearchBox handleSearchChange={handleSearchChange} />
    </>
  );
}

export default Nav;

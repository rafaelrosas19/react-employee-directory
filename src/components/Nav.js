import React from "react";
import SearchBox from "./SearchBox";

function Nav({ handleClick }) {
  return (
    <nav className="navbar">
      <div className="container d-flex justify-content-center">
        <a className="navbar-brand ms-auto fas fa-users" href="#">
          <span className="navemp"> Employee Directory </span>
          <br></br>
          <span className="navsub">
            Click on carrots to filter by heading or use the search box to
            narrow your results.
          </span>
        </a>
        <SearchBox handleClick={handleClick} />
      </div>
    </nav>
  );
}

export default Nav;

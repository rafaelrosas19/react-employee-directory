import React from "react";
import SearchBox from "./SearchBox";

function Nav() {
  return (
    <nav class="navbar">
      <div class="container d-flex justify-content-center">
        <a class="navbar-brand ms-auto fas fa-users" href="#">
          <span class="navemp"> Employee Directory </span>
          <br></br>
          <span class="navsub">
            Click on carrots to filter by heading or use the search box to
            narrow your results.
          </span>
        </a>
        <SearchBox />
      </div>
    </nav>
  );
}

export default Nav;

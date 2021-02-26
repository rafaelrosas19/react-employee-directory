import "./App.css";
import React from "react";
import Nav from "./components/Nav";
import axios from "axios";

function App() {
  const handleClick = (event) => {
    event.preventDefault();

    axios.get("https://randomuser.me/api/?results=200").then((res) => {
      const [...users] = res.data.results;
      console.log(users);
    });
  };

  return (
    <div className="App">
      <Nav handleClick={handleClick} />
      <div className="user-area d-flex justify-content-center">
        This is where all of the information from the api call will show
      </div>
    </div>
  );
}

export default App;

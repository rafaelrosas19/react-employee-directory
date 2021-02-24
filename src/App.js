import "./App.css";
import React from "react";
import Nav from "./components/Nav";

function App() {
  const handleClick = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("https://randomuser.me/api/");
      const userList = await response.json();
      console.log("userList", userList);
    } catch (err) {
      console.log("error: ", err);
    }
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

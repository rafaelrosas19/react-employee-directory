import "./App.css";
import React, { useState } from "react";
import Nav from "./components/Nav";
import UserTable from "./components/UserTable";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   axios.get("https://randomuser.me/api/?results=10&nat=us").then((res) => {
  //     const data = res.data.results;
  //     setUsers([...data]);
  //   });
  // }, []);

  const handleClick = (event) => {
    event.preventDefault();

    axios.get("https://randomuser.me/api/?results=10&nat=us").then((res) => {
      const data = res.data.results;
      setUsers([...data]);
    });
  };

  return (
    <div className="App">
      <Nav handleClick={handleClick} />
      <UserTable users={users} />
    </div>
  );
}

export default App;

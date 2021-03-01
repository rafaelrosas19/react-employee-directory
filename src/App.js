import "./App.css";
import React, { useState, useEffect } from "react";
import Nav from "./components/Nav";
import UserTable from "./components/UserTable";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    axios.get("https://randomuser.me/api/?results=10&nat=us").then((res) => {
      const data = res.data.results;
      setUsers([...data]);
      setFilteredUsers([...data]);
    });
  }, []);

  const handleSearchChange = (event) => {
    const filter = event.target.value;
    const filteredList = users.filter((user) => {
      // merge data together, then see if user input is anywhere inside
      let values = Object.values(user).join("").toLowerCase();
      return values.indexOf(filter.toLowerCase()) !== -1;
    });
    setFilteredUsers([...filteredList]);
    console.log("filtered users", filteredUsers);
  };

  return (
    <div className="App">
      <Nav handleSearchChange={handleSearchChange} />
      <UserTable users={filteredUsers} />
    </div>
  );
}

export default App;

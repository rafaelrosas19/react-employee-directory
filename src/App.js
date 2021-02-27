import "./App.css";
import React, { useState, useEffect } from "react";
import Nav from "./components/Nav";
import UserTable from "./components/UserTable";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://randomuser.me/api/?results=200&nat=us").then((res) => {
      const data = res.data.results;
      setUsers([...data]);
    });
  }, []);

  const handleClick = (event) => {
    event.preventDefault();

    axios.get("https://randomuser.me/api/?results=200&nat=us").then((res) => {
      const data = res.data.results;
      setUsers([...data]);
    });
  };

  // console.log("users", users);

  // const userList = users.map((user) => (
  //   <p key={user.login.uuid}>
  //     {user.name.first} {user.name.last}
  //   </p>
  // ));

  return (
    <div className="App">
      <Nav handleClick={handleClick} />
      <UserTable users={users} />
    </div>
  );
}

export default App;

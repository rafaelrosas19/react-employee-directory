import "./App.css";
import React, { useState, useEffect } from "react";
import Nav from "./components/Nav";
import UserTable from "./components/UserTable";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [order, setOrder] = useState("descend");

  useEffect(() => {
    axios.get("https://randomuser.me/api/?results=50&nat=us").then((res) => {
      const data = res.data.results;
      setUsers([...data]);
      setFilteredUsers([...data]);
    });
  }, []);

  const handleSort = (name) => {
    if (order === "descend") {
      setOrder("ascend");
    } else {
      setOrder("descend");
    }

    const compareFnc = (a, b) => {
      if (order === "ascend") {
        // account for missing values
        if (a[name] === undefined) {
          return 1;
        } else if (b[name] === undefined) {
          return -1;
        }

        // numerically
        else if (name === "name") {
          return a[name].first.localeCompare(b[name].first);
        } else {
          return a[name] - b[name];
        }
      } else {
        // account for missing values
        if (a[name] === undefined) {
          return 1;
        } else if (b[name] === undefined) {
          return -1;
        }
        // numerically
        else if (name === "name") {
          return b[name].first.localeCompare(a[name].first);
        } else {
          return b[name] - a[name];
        }
      }
    };
    const sortedUsers = filteredUsers.sort(compareFnc);
    setFilteredUsers([...sortedUsers]);
  };

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
      <UserTable users={filteredUsers} handleSort={handleSort} />
    </div>
  );
}

export default App;

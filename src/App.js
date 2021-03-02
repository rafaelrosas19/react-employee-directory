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
    axios.get("https://randomuser.me/api/?results=10&nat=us").then((res) => {
      const data = res.data.results;
      setUsers([...data]);
      setFilteredUsers([...data]);
    });
  }, []);

  const handleSort = (heading) => {
    if (order === "descend") {
      setOrder("ascend");
      // this.setState({
      //   order: "ascend",
      // });
    } else {
      // this.setState({
      //   order: "descend",
      // });
      setOrder("descend");
    }

    const compareFnc = (a, b) => {
      if (order === "ascend") {
        // account for missing values
        if (a[heading] === undefined) {
          return 1;
        } else if (b[heading] === undefined) {
          return -1;
        }
        // numerically
        else if (heading === "name") {
          return a[heading].first.localeCompare(b[heading].first);
        } else {
          return a[heading] - b[heading];
        }
      } else {
        // account for missing values
        if (a[heading] === undefined) {
          return 1;
        } else if (b[heading] === undefined) {
          return -1;
        }
        // numerically
        else if (heading === "name") {
          return b[heading].first.localeCompare(a[heading].first);
        } else {
          return b[heading] - a[heading];
        }
      }
    };
    const sortedUsers = filteredUsers.sort(compareFnc);
    // this.setState({ filteredUsers: sortedUsers });
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

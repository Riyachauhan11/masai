import React, { useState } from "react";
import UserInputForm from "./components/UserInputForm";
import UserList from "./components/UserList";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  return (
    <div className="app">
      <h1>Profile Card Generator</h1>
      <UserInputForm onAddUser={addUser} />
      <UserList users={users} />
    </div>
  );
};

export default App;

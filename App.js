/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import AddUser from "./Component/Users/AddUser.js";
import UsersList from "./Component/Users/UsersList";
import React, { useState } from "react";
function App() {
  const [usersList, setUserList] = useState([]);
  const addUserHandler = (Addname, Addage, Addtrain) => {
    setUserList((prevUsersList) => {
      return [
        ...prevUsersList,
        {
          name: Addname,
          age: Addage,
          train: Addtrain,
          id: Math.random().toString(),
        },
      ];
    });
  };
  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </>
  );
}

export default App;

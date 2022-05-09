import { React, useState } from "react";

import AddUsers from "./Components/Users/AddUsers";
import UsersList from "./Components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (user) => {
    setUsersList(prevUsers => [...prevUsers, user]);
  }

  const deleteUserHandler = (userId) => {
    let newUsersList = usersList.filter(user => user.id !== userId);
    setUsersList(newUsersList);
  }

  return (
    <div>
      <AddUsers onAddUser={addUserHandler}/>
      <UsersList users={usersList} onDeleteUser={deleteUserHandler}/>
    </div>
  );
}

export default App;

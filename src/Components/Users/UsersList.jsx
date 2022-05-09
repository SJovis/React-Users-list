import React from "react";

import Card from "../UI/Card";
import classes from "./UsersList.module.css";

import User from "./User";

const UersList = (props) => {


  const deleteUserHandler = (userId) => {
    props.onDeleteUser(userId);
  }

  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            <User id={user.id} name={user.name} age={user.age} onDelete={deleteUserHandler}/>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UersList;

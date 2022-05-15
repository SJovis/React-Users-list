import React from "react";

import Button from "../UI/Button";

const User = (props) => {

  const deleteUserHandler = () => {
    props.onDelete(props.id);
  }

  return (
    <>
      <p>
        {props.name} - {props.age} years old
      </p>
      <Button onClick={deleteUserHandler}>❌</Button>
    </>
  );
};

export default User;

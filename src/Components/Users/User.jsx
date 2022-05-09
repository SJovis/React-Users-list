import React from "react";

import Button from "../UI/Button";
import Wrapper from "../Helpers/Wrapper";

const User = (props) => {

  const deleteUserHandler = () => {
    props.onDelete(props.id);
  }

  return (
    <Wrapper>
      <p>
        {props.name} - {props.age} years old
      </p>
      <Button onClick={deleteUserHandler}>❌</Button>
    </Wrapper>
  );
};

export default User;

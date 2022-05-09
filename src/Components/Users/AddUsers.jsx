import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";
import styles from "./AddUsers.module.css";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid username and/or age.",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age greater than 0.",
      });
      return;
    }
    props.onAddUser({
      name: enteredUsername,
      age: +enteredAge,
      id: new Date().getTime(),
    });
    setEnteredUsername("");
    setEnteredAge("");
  };

  const usernameChangedHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangedHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const clearErrorHandler = () => {
    setError(null);
  }

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onClear={clearErrorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={enteredUsername}
            onChange={usernameChangedHandler}
          />
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            value={enteredAge}
            onChange={ageChangedHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;

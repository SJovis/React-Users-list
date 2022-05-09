import React from "react";

import Card from "./Card";
import Button from "./Button";
import Wrapper from "../Helpers/Wrapper";

import classes from './ErrorModal.module.css';

const ErrorModal = (props) => {
  return (
    <Wrapper>
      <div className={classes.backdrop} onClick={props.onClear}></div>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onClear}>OK</Button>
        </footer>
      </Card>
    </Wrapper>
  );
};

export default ErrorModal;

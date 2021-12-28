/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
import React, { useState } from "react";
import Card from "../UI/Card";
import "./AddUser.css";
import "../UI/Button.js";
import Button from "../UI/Button.js";
import ErrorModel from "../UI/ErrorModel";
const AddUser = (props) => {
  const [enterdName, setenterdName] = useState("");
  const [enterdAge, setenterdAge] = useState("");
  const [enterdTraining, setenterdTraining] = useState("");
  const [error, seterror] = useState();

  const adduserhandler = (event) => {
    event.preventDefault();
    if (enterdName.trim().length === 0) {
      seterror({
        title: "Invalid Input",
        message: "Please Enter A Valid Name.",
      });
      return;
    }
    if (+enterdAge <= 8) {
      seterror({
        title: "Invalid Input",
        message: "Please Enter Your Real Age .",
      });
      return;
    }
    if (+enterdTraining <= 7) {
      seterror({
        title: "SomeThing Wrong!!",
        message: "Please Enter Your Real Training Times.",
      });
      return;
    }
    props.onAddUser(enterdName, enterdAge, enterdTraining);
    setenterdName("");
    setenterdTraining("");
    setenterdAge("");
  };
  const changeNameHandler = (event) => {
    setenterdName(event.target.value);
  };
  const changeAgeHandler = (event) => {
    setenterdAge(event.target.value);
  };
  const changeTrainingHandler = (event) => {
    setenterdTraining(event.target.value);
  };
  const errorHandler = (props) => {
    seterror(null);
  };
  return (
    <>
      {error && (
        <ErrorModel
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className="input">
        <form onSubmit={adduserhandler}>
          <label htmlFor="name">Name</label>
          <input
            id=" name"
            type="text"
            value={enterdName}
            onChange={changeNameHandler}
          />
          <label htmlFor="age">Age</label>
          <input
            id=" age"
            type="number"
            value={enterdAge}
            onChange={changeAgeHandler}
          />
          <label htmlFor="train">Training per week</label>
          <input
            id="trainingperweek"
            type="number"
            min=""
            step="1"
            value={enterdTraining}
            onChange={changeTrainingHandler}
          />

          <Button type="text"> submit</Button>
        </form>
      </Card>
    </>
  );
};
export default AddUser;

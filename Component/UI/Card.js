/* eslint-disable no-unused-vars */
import React from "react";
import card from "./Card.css";
const Card = (props) => {
  return <div className={` card ${props.className}`}>{props.children}</div>;
};
export default Card;

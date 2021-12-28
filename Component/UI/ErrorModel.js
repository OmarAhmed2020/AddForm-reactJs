/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable no-unused-vars */
import Card from "./Card";
import Button from "./Button";
import "./ErrorModule.css";
const ErrorModel = (props) => {
  return (
    <>
      <div className="backdrop" onClick={props.onConfirm} />
      <Card className="modal">
        <header className="header">
          <h2>{props.title}</h2>
        </header>
        <div>
          <p className="content">{props.message}</p>
        </div>
        <footer className="actions">
          <Button onClick={props.onConfirm}>Okay!</Button>
        </footer>
      </Card>
    </>
  );
};
export default ErrorModel;

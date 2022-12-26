import React, { useState } from "react";
import "./Form.css";
import { RightPart } from "./RightPart";

export const Form = () => {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  const firstChange = (e) => {
    setFirst(e.target.value);
  };
  const lastChange = (e) => {
    setLast(e.target.value);
  };
  const emailChange = (e) => {
    setEmail(e.target.value);
  };
  const numberChange = (e) => {
    setNumber(e.target.value);
  };
  const messageChange = (e) => {
    setMessage(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const infoDb = {
      firstName: first,
      lastName: last,
      email: email,
      phNumber: number,
      message: message,
    };
    console.log(infoDb);
  };
  return (
    <div className="formBack container-fluid">
      <form className="formDiv" onSubmit={submitHandler}>
        <div className="row ">
          <div className="row">
            <h3>
              Simple Registration for <span className="specialText"> React Form</span>
            </h3>
          </div>
          <div className="col-8 leftPart">
            <h4 className="specialText">Let Us Know More About You!!</h4>
            <p>Following informations are always safe and secure with us.</p>
            <div className="row nameLast">
              <div className="col">
                <input type="text" placeholder="First Name" onChange={firstChange} />
              </div>
              <div className="col">
                <input type="text" placeholder="Last Name" onChange={lastChange} />
              </div>
            </div>
            <div className="row phoneMail">
              <div className="col">
                <input type="email" placeholder="Email" onChange={emailChange} />
              </div>
              <div className="col">
                <input type="text" placeholder="Ph Number" onChange={numberChange} />
              </div>
            </div>
            <div className="row message">
              <input type="text" placeholder="Message" onChange={messageChange} />
            </div>
            <button className="submitButton">Submit</button>
          </div>
          <div className="col-4 rightPart">
            <RightPart />
          </div>
        </div>
      </form>
    </div>
  );
};

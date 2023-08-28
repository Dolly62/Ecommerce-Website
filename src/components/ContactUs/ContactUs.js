import React, { useState } from "react";
import classes from "./ContactUs.module.css";

const ContactUs = (props) => {
  const [name, setName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [phno, setPhNo] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    const form = {
      name: name,
      emailId: emailId,
      phoneNo: phno,
    };
    props.onAddContact(form);
  };

  const nameHandler = (event) => {
    setName(event.target.value);
  };
  const emailIdHandler = (event) => {
    setEmailId(event.target.value);
  };
  const phoneNumberHandler = (event) => {
    setPhNo(event.target.value);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" value={name} onChange={nameHandler} required />
      <label htmlFor="emailid">Email Id:</label>
      <input
        type="text"
        id="emailid"
        value={emailId}
        onChange={emailIdHandler}
        required
      />
      <label htmlFor="phoneno">Phone Number:</label>
      <input
        type="text"
        id="phoneno"
        value={phno}
        onChange={phoneNumberHandler}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactUs;

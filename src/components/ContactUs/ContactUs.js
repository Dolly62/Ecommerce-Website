import React, { useState } from "react";

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
    <form onSubmit={submitHandler}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" value={name} onChange={nameHandler} />
      <label htmlFor="emailid">Email Id:</label>
      <input
        type="text"
        id="emailid"
        value={emailId}
        onChange={emailIdHandler}
      />
      <label htmlFor="phoneno">Phone Number:</label>
      <input
        type="text"
        id="phoneno"
        value={phno}
        onChange={phoneNumberHandler}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactUs;

import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import "./Login.css";

export default function Login({ setToken }) {

  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "demo",
      password: "pass"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
        sessionStorage.setItem('token','{"token": "user1"}');
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };



  // JSX code for login form
  const renderForm = (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Stack gap={3}>
          <Form.Group controlId="uname">
            <Form.Label>Username (demo)</Form.Label>
            <Form.Control
              autoFocus
              size="lg"
              name="uname"
              type="text"
            />
    
          </Form.Group>
          <Form.Group controlId="pass">
            <Form.Label>Password (pass)</Form.Label>
            <Form.Control
              size="lg"
              type="password"
              name="pass"
            />
          </Form.Group>
          <Button size="lg" type="submit">
            Login
          </Button>
        </Stack>
      </Form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        {isSubmitted ? setToken : renderForm}
      </div>
    </div>
  );
}
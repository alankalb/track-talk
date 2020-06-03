import React, { useState } from "react";
import { useMutation } from "react-apollo";

import { Nav, Modal, Button, Form } from "react-bootstrap";

import CreateUserMutation, {
  CreateUserMutationData,
} from "./graphql/CreateUserMutation.graphql";

export default function CreateAccount() {
  const [CreateUser] = useMutation<CreateUserMutationData>(CreateUserMutation, {
    refetchQueries: ["CurrentUser"],
    awaitRefetchQueries: true,
  });

  const [modalShow, setModalShow] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [passwordValid, setPasswordValid] = useState(true);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [nameTaken, setNameTaken] = useState(false);
  const [emailTaken, setEmailTaken] = useState(false);
  const [emailValid, setEmailValid] = useState(true);
  const [error, setError] = useState(false);

  const submitDisabled =
    name === "" ||
    email === "" ||
    password === "" ||
    passwordCheck === "" ||
    !passwordValid;

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);

    if (event.target.value === "" || passwordCheck === "") {
      setPasswordValid(true);
    } else if (event.target.value !== passwordCheck) {
      setPasswordValid(false);
    } else {
      setPasswordValid(true);
    }
  };

  const handlePasswordCheckChange = (event) => {
    setPasswordCheck(event.target.value);

    if (event.target.value !== password) {
      setPasswordValid(false);
    } else {
      setPasswordValid(true);
    }
  };

  const handleEmailChange = (event) => {
    setEmailTaken(false);
    setEmail(event.target.value);

    if (!emailValid && event.target.value.includes("@")) {
      setEmailValid(true);
    }
  };

  const handleNameChange = (event) => {
    setNameTaken(false);
    setName(event.target.value);
  };

  const toggleModal = () => {
    setModalShow(!modalShow);
  };

  const handleSubmit = async () => {
    if (!email.includes("@") || !email.includes(".")) {
      setEmailValid(false);
      return;
    }

    const CreateAccount = await CreateUser({
      variables: { name: name, email: email, password: password },
    });
    if (CreateAccount.data.createUser.user) {
      toggleModal;
    } else if (CreateAccount.data.createUser.errors.length > 0) {
      if (
        CreateAccount.data.createUser.errors.includes(
          "Name has already been taken"
        )
      ) {
        setNameTaken(true);
      }
      if (
        CreateAccount.data.createUser.errors.includes(
          "Email has already been taken"
        )
      ) {
        setEmailTaken(true);
      }
      if (nameTaken && emailTaken) {
        setError(true);
      }
    }
  };

  const errorMessage = error ? (
    <Form.Text>Something went wrong. Please try again.</Form.Text>
  ) : null;

  return (
    <>
      <Nav.Link onClick={toggleModal}>Create Account</Nav.Link>
      <Modal show={modalShow} onHide={toggleModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>User Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formGroupEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={handleEmailChange}
                isInvalid={emailTaken || !emailValid}
              />
              <Form.Control.Feedback type="invalid">
                {!emailValid
                  ? "Please enter a valid email address"
                  : "Email is already in use by an account"}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formGroupName">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username (max length: 20 char)"
                value={name}
                onChange={handleNameChange}
                isInvalid={nameTaken}
                maxLength={20}
              />
              <Form.Control.Feedback type="invalid">
                Username has already been taken
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />
            </Form.Group>
            <Form.Group controlId="formGroupPasswordCheck">
              <Form.Label>Re-enter password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={passwordCheck}
                onChange={handlePasswordCheckChange}
                isInvalid={!passwordValid}
              />
              <Form.Control.Feedback type="invalid">
                Password entries must match
              </Form.Control.Feedback>
            </Form.Group>
            {errorMessage}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={toggleModal}>
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={handleSubmit}
            disabled={submitDisabled}
          >
            Sign In
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

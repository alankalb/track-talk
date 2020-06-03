import React, { useState } from "react";
import { useMutation } from "react-apollo";

import { Nav, Modal, Button, Form } from "react-bootstrap";

import SignInMutation, {
  SignInMutationData,
} from "./graphql/SignInMutation.graphql";

export default function SignIn() {
  const [SignInUser] = useMutation<SignInMutationData>(SignInMutation, {
    refetchQueries: ["CurrentUser"],
    awaitRefetchQueries: true,
  });

  const [modalShow, setModalShow] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const toggleModal = () => {
    setModalShow(!modalShow);
  };

  const handleSubmit = async () => {
    console.log(event);
    const SignIn = await SignInUser({
      variables: { email: email, password: password },
    });
    if (SignIn.data.signInUser) {
      toggleModal;
    } else {
      setError(true);
    }
  };

  const errorMessage = error ? (
    <Form.Text>
      The email and/or password you entered is not correct. Please try again.
    </Form.Text>
  ) : null;

  return (
    <>
      <Nav.Link onClick={toggleModal}>Sign In</Nav.Link>
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
              />
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
            {errorMessage}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={toggleModal}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Sign In
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

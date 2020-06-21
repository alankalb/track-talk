import React, { useState } from "react";
import { useMutation } from "react-apollo";

import { Nav, Modal, Button, Form } from "react-bootstrap";

import SignInMutation, {
  SignInMutationData,
} from "./graphql/SignInMutation.graphql";

import PasswordRequestMutation, {
  PasswordRequestMutationData,
} from "./graphql/PasswordRequestMutation.graphql";

export default function SignIn() {
  const [SignInUser] = useMutation<SignInMutationData>(SignInMutation, {
    refetchQueries: ["CurrentUser"],
    awaitRefetchQueries: true,
  });

  const [RequestPasswordReset] = useMutation<PasswordRequestMutationData>(
    PasswordRequestMutation
  );

  const [modalShow, setModalShow] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [requestPasswordMessage, setRequestPasswordMessage] = useState<
    string | null
  >(null);

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const toggleModal = () => {
    setForgotPassword(false);
    setError(false);
    setModalShow(!modalShow);
    setRequestPasswordMessage(null);
  };

  const togglePasswordReset = async () => {
    setForgotPassword(!forgotPassword);
    setRequestPasswordMessage(null);
    setError(false);
  };

  const handleSubmit = () => {
    if (forgotPassword) {
      submitPasswordRequest();
    } else {
      signIn();
    }
  };

  const submitPasswordRequest = async () => {
    setLoading(true);
    console.log("reset");
    const submitPasswordRequest = await RequestPasswordReset({
      variables: { email: email },
    });

    if (submitPasswordRequest.data?.resetPasswordRequest?.user) {
      setRequestPasswordMessage(
        "Request submitted successfully. Please check your email for further instructions."
      );
    } else {
      setRequestPasswordMessage("Email does not exist in our records.");
    }
    setLoading(false);
  };

  const signIn = async () => {
    const SignIn = await SignInUser({
      variables: { email: email, password: password },
    });
    if (SignIn.data.signInUser) {
      return;
    } else {
      setError(true);
    }
  };

  const errorMessage = error ? (
    <Form.Text>
      The email and/or password you entered is not correct. Please try again.
    </Form.Text>
  ) : null;

  const passwordMarkup = forgotPassword ? (
    <p>
      To reset your password, enter your email and click 'Submit'. Instructions
      on how to reset your password will be emailed to you.
    </p>
  ) : (
    <Form.Group controlId="formGroupPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control
        type="password"
        placeholder="Password"
        value={password}
        onChange={handlePasswordChange}
      />
    </Form.Group>
  );

  const requestPasswordMarkup = requestPasswordMessage ? (
    <Form.Text>{requestPasswordMessage}</Form.Text>
  ) : null;

  return (
    <>
      <Nav.Link onClick={toggleModal}>Sign In</Nav.Link>
      <Modal show={modalShow} onHide={toggleModal} centered animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>
            {forgotPassword ? "Password Reset" : "User Sign In"}
          </Modal.Title>
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
              {requestPasswordMarkup}
            </Form.Group>
            {passwordMarkup}
            {errorMessage}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <a className="forgot-password" onClick={togglePasswordReset}>
            {forgotPassword ? "Back to Sign In" : "Forgot Password"}
          </a>
          <Button variant="secondary" onClick={toggleModal}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSubmit} disabled={isLoading}>
            {forgotPassword ? "Submit" : "Sign In"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

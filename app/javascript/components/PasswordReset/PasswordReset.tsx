import React, { useState } from "react";
import { useMutation } from "react-apollo";

import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Card,
  Spinner,
} from "react-bootstrap";

import PasswordResetMutation, {
  PasswordResetMutationData,
} from "./graphql/PasswordResetMutation.graphql";

export default function PasswordReset() {
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [passwordValid, setPasswordValid] = useState(true);
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const [PasswordReset] = useMutation<PasswordResetMutationData>(
    PasswordResetMutation
  );

  const submitDisabled =
    email === "" ||
    password === "" ||
    passwordCheck === "" ||
    !passwordValid ||
    code.length < 6;

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
    setEmail(event.target.value);
  };

  const handleCodeChange = (event) => {
    setCode(event.target.value);
  };

  const handleSubmit = async () => {
    setLoading(true);
    const submitPasswordReset = await PasswordReset({
      variables: { email: email, password: password, token: code },
    });
    setLoading(false);
    setSubmitted(true);
    if (submitPasswordReset.data?.resetPassword?.user) {
      setSubmitSuccess(true);
    } else {
      setSubmitSuccess(false);
    }
  };

  const submitMessageMarkup = submitSuccess ? (
    <Form.Text>
      Password reset succesful. Please return to the <a href={"/"}>homepage</a>{" "}
      to login
    </Form.Text>
  ) : (
    <Form.Text>
      An error occured. You may have the wrong email and/or authentication code,
      or your authnetication code has expired.
    </Form.Text>
  );

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs lg="6">
          <Card>
            <Card.Header as="h5">Password Reset</Card.Header>
            <Card.Body>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={handleEmailChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Authentication code</Form.Label>
                  <Form.Control
                    type="text"
                    maxLength={6}
                    value={code}
                    onChange={handleCodeChange}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>New Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
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
                {submitted ? submitMessageMarkup : null}
              </Form>
              <div className={"reset-password-btn"}>
                <Button
                  variant="primary"
                  disabled={submitDisabled || loading}
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
                {loading ? (
                  <Spinner
                    animation="border"
                    as="span"
                    size="sm"
                    role="status"
                    className={"spinner"}
                    variant="primary"
                  />
                ) : null}
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

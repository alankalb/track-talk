import React from "react";

import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

import { UserAccounts } from "./components";
import Logo from "logo.svg";

export default function NavBar() {
  const location = useLocation();

  return (
    <div className={"navbar-spacing"}>
      <Navbar bg="dark" sticky="top" variant="dark">
        <Container fluid>
          <Link to="/">
            <Navbar.Brand>
              <img
                src={Logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />{" "}
              TrackTalk
            </Navbar.Brand>
          </Link>
          <Nav>
            {location.pathname === "/password_reset" ? null : <UserAccounts />}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

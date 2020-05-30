import React from "react";

import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

import Logo from "logo.svg";

export default function NavBar() {
  return (
    <Navbar bg="dark" sticky="top" variant="dark">
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
    </Navbar>
  );
}

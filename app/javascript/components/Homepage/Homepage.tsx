import React from "react";
import { useQuery } from "react-apollo";
import Logo from "logo.svg";

import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

import PostQuery, { PostsQueryData } from "./graphql/PostsQuery.graphql";

export default function Homepage() {
  const { loading, error, data } = useQuery<PostsQueryData>(PostQuery);

  console.log(data);
  console.log(loading);
  console.log(error);

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
          <i>TrackTalk</i>
        </Navbar.Brand>
      </Link>
    </Navbar>
  );
}

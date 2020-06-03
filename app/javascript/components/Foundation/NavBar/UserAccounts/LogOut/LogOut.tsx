import React from "react";
import { useMutation } from "react-apollo";

import { Nav } from "react-bootstrap";

import LogOutMutation, {
  LogOutMutationData,
} from "./graphql/LogOutMutation.graphql";

export default function NavBar() {
  const [LogOutUser] = useMutation<LogOutMutationData>(LogOutMutation, {
    refetchQueries: ["CurrentUser"],
    awaitRefetchQueries: true,
  });

  return <Nav.Link onClick={() => LogOutUser()}>Log Out</Nav.Link>;
}

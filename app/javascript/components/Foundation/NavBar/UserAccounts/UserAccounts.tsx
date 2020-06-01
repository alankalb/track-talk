import React from "react";

import { Nav } from "react-bootstrap";

import { LogOut, SignIn } from "./components";
import { useUserContext } from "utilities";

export default function NavBar() {
  const { currentUser } = useUserContext();

  if (currentUser) {
    return <LogOut />;
  }

  return (
    <>
      <Nav.Link onClick={() => console.log("create")}>Create Account</Nav.Link>
      <SignIn />
    </>
  );
}

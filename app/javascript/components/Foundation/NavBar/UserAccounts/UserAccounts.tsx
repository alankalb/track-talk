import React from "react";

import { Nav } from "react-bootstrap";

import { LogOut, SignIn, CreateAccount } from "./components";
import { useUserContext } from "utilities";

export default function NavBar() {
  const { currentUser } = useUserContext();

  if (currentUser) {
    return <LogOut />;
  }

  return (
    <>
      <CreateAccount />
      <SignIn />
    </>
  );
}

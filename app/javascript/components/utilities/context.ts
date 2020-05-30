import React, { useContext } from "react";

interface User {
  id: string;
  name: string;
}

export interface UserContextProps {
  currentUser: null | User;
}

export const UserContext = React.createContext<UserContextProps>({
  currentUser: null,
});

export const useUserContext = () => useContext(UserContext);

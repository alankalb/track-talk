import React from "react";
import { useQuery } from "react-apollo";

import { UserContext } from "utilities";

import CurrentUserQuery, {
  CurrentUserQueryData,
} from "./graphql/CurrentUserQuery.graphql";

interface Props {
  children?: React.ReactNode;
}

export default function AppContext({ children }: Props) {
  const { data, loading } = useQuery<CurrentUserQueryData>(CurrentUserQuery);

  if (loading) {
    return null;
  }

  const currentUser = data.user;

  return (
    <UserContext.Provider
      value={{
        currentUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

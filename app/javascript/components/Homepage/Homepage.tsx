import React from "react";
import { useQuery } from "react-apollo";

import PostQuery, { PostsQueryData } from "./graphql/PostsQuery.graphql";

import { useUserContext } from "utilities";

export default function Homepage() {
  const { loading, error, data } = useQuery<PostsQueryData>(PostQuery);

  console.log(data);
  console.log(loading);
  console.log(error);

  const { currentUser } = useUserContext();

  const message = currentUser ? `Hello ${currentUser.name}!` : "Hello World!";

  return <p>{message}</p>;
}

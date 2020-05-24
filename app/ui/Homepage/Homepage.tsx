import React from "react";
import { useQuery } from "react-apollo";
import PostQuery, { PostsQueryData } from "./graphql/PostsQuery.graphql";

export default function Homepage() {
  const { loading, error, data } = useQuery<PostsQueryData>(PostQuery);

  console.log(data);
  console.log(loading);
  console.log(error);

  return <p>Hello World!!</p>;
}

import { DocumentNode } from "graphql-typed";
export namespace PostsQueryPartialData {
  export interface PostsEdgesNodePostedBy {
    __typename?: "User" | null;
    name?: string | null;
    id?: string | null;
  }
  export interface PostsEdgesNode {
    __typename?: "Post" | null;
    id?: number | null;
    text?: string | null;
    title?: string | null;
    postedBy?: PostsQueryPartialData.PostsEdgesNodePostedBy | null;
  }
  export interface PostsEdges {
    __typename?: "PostEdge" | null;
    node?: PostsQueryPartialData.PostsEdgesNode | null;
  }
  export interface Posts {
    __typename?: "PostConnection" | null;
    edges?: (PostsQueryPartialData.PostsEdges | null)[] | null;
  }
}
export interface PostsQueryPartialData {
  posts?: PostsQueryPartialData.Posts | null;
}
export namespace PostsQueryData {
  export interface PostsEdgesNodePostedBy {
    __typename: "User";
    name: string;
    id: string;
  }
  export interface PostsEdgesNode {
    __typename: "Post";
    id: number;
    text: string;
    title: string;
    postedBy?: PostsQueryData.PostsEdgesNodePostedBy | null;
  }
  export interface PostsEdges {
    __typename: "PostEdge";
    node?: PostsQueryData.PostsEdgesNode | null;
  }
  export interface Posts {
    __typename: "PostConnection";
    edges?: (PostsQueryData.PostsEdges | null)[] | null;
  }
}
export interface PostsQueryData {
  posts: PostsQueryData.Posts;
}
declare const document: DocumentNode<PostsQueryData, never, PostsQueryPartialData>;
export default document;
import { DocumentNode } from "graphql-typed";
export namespace PostsQueryPartialData {
  export interface PostsComments {
    __typename?: "Comment" | null;
    text?: string | null;
  }
  export interface Posts {
    __typename?: "Post" | null;
    id?: number | null;
    text?: string | null;
    title?: string | null;
    comments?: (PostsQueryPartialData.PostsComments | null)[] | null;
  }
}
export interface PostsQueryPartialData {
  posts?: (PostsQueryPartialData.Posts | null)[] | null;
}
export namespace PostsQueryData {
  export interface PostsComments {
    __typename: "Comment";
    text: string;
  }
  export interface Posts {
    __typename: "Post";
    id: number;
    text: string;
    title: string;
    comments: PostsQueryData.PostsComments[];
  }
}
export interface PostsQueryData {
  posts: PostsQueryData.Posts[];
}
declare const document: DocumentNode<PostsQueryData, never, PostsQueryPartialData>;
export default document;
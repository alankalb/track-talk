import { DocumentNode } from "graphql-typed";
export namespace CurrentUserQueryPartialData {
  export interface User {
    __typename?: "User" | null;
    id?: string | null;
    name?: string | null;
  }
}
export interface CurrentUserQueryPartialData {
  user?: CurrentUserQueryPartialData.User | null;
}
export namespace CurrentUserQueryData {
  export interface User {
    __typename: "User";
    id: string;
    name: string;
  }
}
export interface CurrentUserQueryData {
  user?: CurrentUserQueryData.User | null;
}
declare const document: DocumentNode<CurrentUserQueryData, never, CurrentUserQueryPartialData>;
export default document;
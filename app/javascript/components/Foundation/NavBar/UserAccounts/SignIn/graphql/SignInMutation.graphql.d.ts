import { DocumentNode } from "graphql-typed";
export namespace SignInMutationPartialData {
  export interface SignInUserUser {
    __typename?: "User" | null;
    id?: string | null;
    name?: string | null;
    email?: string | null;
  }
  export interface SignInUser {
    __typename?: "SignInUserPayload" | null;
    user?: SignInMutationPartialData.SignInUserUser | null;
  }
}
export interface SignInMutationPartialData {
  signInUser?: SignInMutationPartialData.SignInUser | null;
}
export namespace SignInMutationData {
  export interface Variables {
    email: string;
    password: string;
  }
  export interface SignInUserUser {
    __typename: "User";
    id: string;
    name: string;
    email: string;
  }
  export interface SignInUser {
    __typename: "SignInUserPayload";
    user?: SignInMutationData.SignInUserUser | null;
  }
}
export interface SignInMutationData {
  signInUser?: SignInMutationData.SignInUser | null;
}
declare const document: DocumentNode<SignInMutationData, SignInMutationData.Variables, SignInMutationPartialData>;
export default document;
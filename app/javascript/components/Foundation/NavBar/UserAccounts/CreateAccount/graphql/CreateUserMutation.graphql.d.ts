import { DocumentNode } from "graphql-typed";
export namespace CreateUserMutationPartialData {
  export interface CreateUserUser {
    __typename?: "User" | null;
    id?: string | null;
  }
  export interface CreateUser {
    __typename?: "CreateUserPayload" | null;
    user?: CreateUserMutationPartialData.CreateUserUser | null;
    errors?: (string | null)[] | null;
  }
}
export interface CreateUserMutationPartialData {
  createUser?: CreateUserMutationPartialData.CreateUser | null;
}
export namespace CreateUserMutationData {
  export interface Variables {
    name: string;
    email: string;
    password: string;
  }
  export interface CreateUserUser {
    __typename: "User";
    id: string;
  }
  export interface CreateUser {
    __typename: "CreateUserPayload";
    user?: CreateUserMutationData.CreateUserUser | null;
    errors: string[];
  }
}
export interface CreateUserMutationData {
  createUser?: CreateUserMutationData.CreateUser | null;
}
declare const document: DocumentNode<CreateUserMutationData, CreateUserMutationData.Variables, CreateUserMutationPartialData>;
export default document;
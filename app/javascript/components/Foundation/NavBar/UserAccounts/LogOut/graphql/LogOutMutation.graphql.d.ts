import { DocumentNode } from "graphql-typed";
export namespace LogOutMutationPartialData {
  export interface LogOutUser {
    __typename?: "LogOutUserPayload" | null;
    errors?: (string | null)[] | null;
  }
}
export interface LogOutMutationPartialData {
  logOutUser?: LogOutMutationPartialData.LogOutUser | null;
}
export namespace LogOutMutationData {
  export interface LogOutUser {
    __typename: "LogOutUserPayload";
    errors: string[];
  }
}
export interface LogOutMutationData {
  logOutUser?: LogOutMutationData.LogOutUser | null;
}
declare const document: DocumentNode<LogOutMutationData, never, LogOutMutationPartialData>;
export default document;
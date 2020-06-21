import { DocumentNode } from "graphql-typed";
export namespace PasswordRequestMutationPartialData {
  export interface ResetPasswordRequestUser {
    __typename?: "User" | null;
    id?: string | null;
  }
  export interface ResetPasswordRequest {
    __typename?: "ResetPasswordRequestPayload" | null;
    user?: PasswordRequestMutationPartialData.ResetPasswordRequestUser | null;
    errors?: (string | null)[] | null;
  }
}
export interface PasswordRequestMutationPartialData {
  resetPasswordRequest?: PasswordRequestMutationPartialData.ResetPasswordRequest | null;
}
export namespace PasswordRequestMutationData {
  export interface Variables {
    email: string;
  }
  export interface ResetPasswordRequestUser {
    __typename: "User";
    id: string;
  }
  export interface ResetPasswordRequest {
    __typename: "ResetPasswordRequestPayload";
    user?: PasswordRequestMutationData.ResetPasswordRequestUser | null;
    errors: string[];
  }
}
export interface PasswordRequestMutationData {
  resetPasswordRequest?: PasswordRequestMutationData.ResetPasswordRequest | null;
}
declare const document: DocumentNode<PasswordRequestMutationData, PasswordRequestMutationData.Variables, PasswordRequestMutationPartialData>;
export default document;
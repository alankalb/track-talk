import { DocumentNode } from "graphql-typed";
export namespace PasswordResetMutationPartialData {
  export interface ResetPasswordUser {
    __typename?: "User" | null;
    id?: string | null;
  }
  export interface ResetPassword {
    __typename?: "ResetPasswordPayload" | null;
    user?: PasswordResetMutationPartialData.ResetPasswordUser | null;
    errors?: (string | null)[] | null;
  }
}
export interface PasswordResetMutationPartialData {
  resetPassword?: PasswordResetMutationPartialData.ResetPassword | null;
}
export namespace PasswordResetMutationData {
  export interface Variables {
    email: string;
    password: string;
    token: string;
  }
  export interface ResetPasswordUser {
    __typename: "User";
    id: string;
  }
  export interface ResetPassword {
    __typename: "ResetPasswordPayload";
    user?: PasswordResetMutationData.ResetPasswordUser | null;
    errors: string[];
  }
}
export interface PasswordResetMutationData {
  resetPassword?: PasswordResetMutationData.ResetPassword | null;
}
declare const document: DocumentNode<PasswordResetMutationData, PasswordResetMutationData.Variables, PasswordResetMutationPartialData>;
export default document;
export interface CreateCommentInput {
  text: string;
  postId: string;
  clientMutationId?: string | null;
}
export interface CreatePostInput {
  title: string;
  text: string;
  clientMutationId?: string | null;
}
export interface CreateUserInput {
  name: string;
  authProvider?: AuthProviderSignupData | null;
  clientMutationId?: string | null;
}
export interface AuthProviderSignupData {
  credentials?: AUTH_PROVIDER_CREDENTIALS | null;
}
export interface AUTH_PROVIDER_CREDENTIALS {
  email: string;
  password: string;
}
export interface LogOutUserInput {
  clientMutationId?: string | null;
}
export interface SignInUserInput {
  credentials?: AUTH_PROVIDER_CREDENTIALS | null;
  clientMutationId?: string | null;
}
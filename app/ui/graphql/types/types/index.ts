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
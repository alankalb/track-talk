module Types
  class MutationType < BaseObject
    field :create_post, mutation: Mutations::CreatePost
    field :create_comment, mutation: Mutations::CreateComment
    field :create_user, mutation: Mutations::CreateUser
    field :sign_in_user, mutation: Mutations::SignInUser
    field :log_out_user, mutation: Mutations::LogOutUser
    field :reset_password_request, mutation: Mutations::ResetPasswordRequest
    field :reset_password, mutation: Mutations::ResetPassword
  end
end

module Types
  class UserType < BaseObject
    field :id, ID, null: false
    field :name, String, null: false
    field :email, String, null: false
    field :posts, PostType.connection_type, null: false
    field :comments, CommentType.connection_type, null: false
  end
end

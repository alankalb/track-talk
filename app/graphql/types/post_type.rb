module Types
  class PostType < BaseObject
    field :id, Integer, null: false
    field :title, String, null: false
    field :text, String, null: false
    field :posted_by, UserType, null: true, method: :user
    field :comments, [CommentType], null: false
  end
end
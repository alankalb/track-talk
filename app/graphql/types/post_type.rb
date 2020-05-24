module Types
  class PostType < Types::BaseObject
    field :id, Integer, null: false
    field :title, String, null: false
    field :text, String, null: false
    field :comments, [CommentType], null: false
  end
end
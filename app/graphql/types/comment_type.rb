module Types
  class CommentType < Types::BaseObject
    field :id, Integer, null: false
    field :text, String, null: false
  end
end
module Types
  class CommentType < BaseObject
    field :id, Integer, null: false
    field :text, String, null: false
  end
end
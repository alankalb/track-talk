module Types
  class CommentType < BaseObject
    field :id, Integer, null: false
    field :text, String, null: false
    field :posted_by, UserType, null: true, method: :user
  end
end
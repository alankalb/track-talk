module Types
  class QueryType < BaseObject
    field :posts, PostType.connection_type, null: false

    field :user, UserType, null: true

    def posts
      Post.all
    end

    def user
      context[:current_user]
    end
  end
end

module Types
  class QueryType < BaseObject
    field :posts, [PostType], null: false

    def posts
      Post.all
    end
  end
end

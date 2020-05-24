module Types
  class QueryType < Types::BaseObject
    field :posts, [PostType], null: false

    def posts
      Post.all
    end
  end
end

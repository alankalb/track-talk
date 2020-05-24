class Mutations::CreatePost < Mutations::BaseMutation
  null true

  argument :title, String, required: true
  argument :text, String, required: true

  field :post, Types::PostType, null: true
  field :errors, [String], null: false

  def resolve(title:, text:)
    post = Post.new(title: title, text: text)
    if post.save
      {
        post: post,
        errors: [],
      }
    else
      {
        post: nil,
        errors: post.errors.full_messages
      }
    end
  end
end
module Mutations
  class LogOutUser < BaseMutation
    null true

    field :errors, [String], null: false

    def resolve
      context[:session][:token] = nil
      context[:session] = nil

      { errors: []}
    end
  end
end
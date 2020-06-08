module Mutations
  class ResetPassword < BaseMutation
    null true

    argument :email, String, required: false
    argument :reset_token, String, required: false
    argument :new_password, String, required: false

    field :user, Types::UserType, null: true
    field :errors, [String], null: false

    def resolve(email: nil, reset_token: nil, new_password: nil)
      return unless email && reset_token && new_password

      user = User.find_by email: email

      # ensures we have the correct user
      return unless user
      return unless user.reset_token_expiry && Time.now < user.reset_token_expiry && !user.reset_token_used
      return unless user.authenticate_reset_token(reset_token)

      if user.update(password: new_password, reset_token_used: true)
        {
          user: user,
          errors: []
        }
      else
        {
          user: nil,
          errors: ['Error occured']
        }
      end
    end
  end
end
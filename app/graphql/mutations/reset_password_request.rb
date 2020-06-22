module Mutations
  class ResetPasswordRequest < BaseMutation
    require 'securerandom'
    require 'sendgrid-ruby'
    include SendGrid

    argument :email, String, required: true

    field :user, Types::UserType, null: true
    field :errors, [String], null: false

    def resolve(email: nil)
      user = User.find_by(email: email)

      if user
        add_token_to_user(user)
      else
        {
          user: nil,
          errors: ["User does not exist"]
        }
      end
    end

    private

    def add_token_to_user(user)
      token = SecureRandom.alphanumeric(6)
      token_expiry = Time.now.utc + 1800
      token_expiry = token_expiry.iso8601(6)

      if user.update(reset_token: token, reset_token_expiry: token_expiry, reset_token_used: false) 
        send_reset_password_email(user, token)
      else
        {
          user: nil,
          errors: ["Unable to add reset token"]
        }
      end
    end

    def send_reset_password_email(user, token)
      value = "
      Hello #{user.name},\n
      We are sending you this email as you have forgotten your password for TrackTalk.ca and have requested to reset it.
      If you have not requested to reset your password, please ignore this email or contact us at info@tracktalk.ca.\n
      To reset your password visit www.tracktalk.ca/password_reset and enter the following 6-digit authentication code along with your email and new password. This token will expire in 30 minutes.\n
      #{token}\n
      All the best,\n
      Team TrackTalk
      "

      from = Email.new(email: 'password_reset@tracktalk.ca')
      to = Email.new(email: "#{user.email}")
      subject = 'TrackTalk Password Reset'
      content = Content.new(type: 'text/plain', value: value)
      mail = Mail.new(from, subject, to, content)

      sg = SendGrid::API.new(api_key: ENV['SENDGRID_API_KEY'])
      puts ENV['SENDGRID_API_KEY']
      response = sg.client.mail._('send').post(request_body: mail.to_json)
      puts response.status_code
      puts response
      if response.status_code == '202'
        {
          user: user,
          errors: []
        }
      else
        {
          user: nil,
          errors: ["Unable to send email"]
        }
      end

    end
  end
end
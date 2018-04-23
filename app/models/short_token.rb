require 'digest'

class ShortToken

  attr_reader :user_email

  def initialize(user_email)
    @user_email = user_email
  end

  def create
    user = User.find_or_create_by(email: user_email)
    if (user && !user.blocked?)
      now = DateTime.now
      token = generate_token(now)
      user.short_token = token
      user.short_token_issue_time = now
      return token if user.save
    end
  end

  private

  def generate_token(now)
    Digest::MD5.hexdigest now.to_s
  end
end

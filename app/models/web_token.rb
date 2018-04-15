require 'jwt'

class WebToken

  def self.create(user)
    return nil if user.nil?
    exp = Time.now.to_i + (10) # One month exp. time
    payload = { id: user.id, exp: exp }
    JWT.encode payload, HMAC_SECRET, 'HS256'
  end

  def self.decode(token)
    JWT.decode token, HMAC_SECRET, true, { algorithm: 'HS256' }
  end

end

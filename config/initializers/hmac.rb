HMAC_SECRET = Rails.env == 'production' ?
  Rails.application.credentials.production[:jwt_secret] :
  Rails.application.credentials.development[:jwt_secret]

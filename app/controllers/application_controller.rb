class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by using :null_session
  protect_from_forgery with: :null_session
  before_action :authenticate

  private

  def authenticate
    begin
      payload, header = JWT.decode(token, Rails.application.secrets.secret_key_base)
      @current_user = User.find_by(id: payload['user_id'])
    rescue
      render json: {message: 'Unauthorized!'}, status: :unauthorized
    end
  end

  def token
    request.headers['Authorization'].split(' ').last if request.headers['Authorization']
  end
end

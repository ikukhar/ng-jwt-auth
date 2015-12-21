class AuthController < ApplicationController

  skip_before_action :authenticate

  def register
    @user = User.new(auth_params)
    if @user.save
      render json: user_json, status: :created
    else
      render json: {message: @user.errors.messages.to_a.join(': ')}, status: :unauthorized
    end
  end

  def login
    @user = User.find_by(email: auth_params[:email])
    if @user
      render json: user_json, status: :created
    else
      render json: {message: 'User not found!'}, status: :unauthorized
    end
  end

  private
  def auth_params
    params.require(:auth).permit(:email)
  end

  def user_json
    { token: JsonWebToken.encode(user_id: @user.id), user: @user }
  end

end

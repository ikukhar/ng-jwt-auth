class SessionsController < ApplicationController

  def create
    @user = User.find_by(email: session_params[:email])
    if @user
      render json: { token: JsonWebToken.encode(user_id: @user.id), user: @user }, status: :created
    else
      render json: {message: 'User not found!'}, status: :unauthorized
    end
  end

  private
  def session_params
    params.require(:session).permit(:email)
  end

end

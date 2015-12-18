class RegistrationsController < ApplicationController

  def create
    @user = User.new(reg_params)
    if @user.save
      render json: { token: JsonWebToken.encode(user: @user) }, status: :created
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  private
  def reg_params
    params.require(:registration).permit(:email)
  end

end

class RegistrationsController < ApplicationController

  def create
    print user_params
    # @project = Project.new(project_params)
    # if @project.save
      # render json: @project, status: :created
    # else
    #   render json: @project.errors, status: :unprocessable_entity
    # end
  end

  private
  def user_params
    params.require(:user).permit(:email)
  end

end

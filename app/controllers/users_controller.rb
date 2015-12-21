class UsersController < ApplicationController
  def show
    render 'templates/user', layout: nil
  end
end

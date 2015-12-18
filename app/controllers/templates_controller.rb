class TemplatesController < ApplicationController
  def start
  end

  def sign_in
    render 'sign_in', layout: nil
  end

  def sign_up
    render 'sign_up', layout: nil
  end

  def user
    render 'user', layout: nil
  end
end

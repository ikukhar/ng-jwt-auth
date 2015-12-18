class TemplatesController < ApplicationController
  def start
  end

  def login
    render 'login', layout: nil
  end

  def register
    render 'register', layout: nil
  end

  def user
    render 'user', layout: nil
  end
end

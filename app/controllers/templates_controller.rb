class TemplatesController < ApplicationController

  skip_before_action :authenticate

  def start
  end

  def login
    render 'login', layout: nil
  end

  def register
    render 'register', layout: nil
  end

end

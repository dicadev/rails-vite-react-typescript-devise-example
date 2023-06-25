class HomeController < ApplicationController
  skip_before_action :authenticate_user!
  def index; end

  def create
    render json: { message: 'Welcome to the API' }
  end
end
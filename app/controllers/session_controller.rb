class SessionController < ApplicationController
  skip_before_action :verify_authenticity_token
  skip_before_action :authenticate_user!

  def index
    render json: { csrf_token: form_authenticity_token }
  end
end

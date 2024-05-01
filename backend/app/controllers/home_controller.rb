# frozen_string_literal: true

class HomeController < ApplicationController
  respond_to :json
  before_action :authenticate_user!, only: [:secret_message]
  def index; end

  def secret_message
    render json: {
      message: 'Hello Authenticated user !!!',
      secret: "The secret is: #{current_user.to_json}"
    }
  end
end

# frozen_string_literal: true

class Api::SecretsController < ApplicationController
  before_action :authenticate_user!, only: [:secret_message]

  def secret_message
    render json: {
      message: 'Hello Authenticated user !!!',
      secret: "The secret is: #{current_user.to_json}"
    }
  end
end

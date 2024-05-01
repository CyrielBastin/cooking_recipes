# frozen_string_literal: true

class Users::RegistrationsController < Devise::RegistrationsController
  respond_to :json

  def create
    @user = User.new(user_params)
    @user.jti = SecureRandom.uuid
    return if params[:user][:password] != params[:user][:password_confirmation]

    render('show', status: :created) if @user.save
  end

  private

  def user_params
    params.require(:user).permit(:id, :email, :password, :password_confirmation)
  end

  # def respond_with(current_user, _opts = {})
  #   @user = current_user
  #
  #   render('show', status: :created) if resource.persisted?
  # end
end

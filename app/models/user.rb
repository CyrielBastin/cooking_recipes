class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :invitable, :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable, :confirmable

  attr_accessor :skip_password_validation

  def invited?
    invitation_sent_at.present?
  end

  def confirmed?
    confirmed_at.present?
  end


  private

  def password_required?
    return false if skip_password_validation

    super
  end
end

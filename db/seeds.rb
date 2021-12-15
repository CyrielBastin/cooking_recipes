# frozen_string_literal: true

require_relative 'starting_data/import_data'

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Save an Array of +users+ in the database without throwing an error
#
# @param [Array<User>] users
# @note catches [ActionView::Template::Error, ActionController::UrlGenerationError]
# @return [Array<User>] users
def save_users(users)
  users.each do |user|
    user.save
  # There is a bug with the +Devise+ gem and a +locale+ variable scoped in the path (http://mysite.com/+en+/rest/of/path).
  # The +Devise/confirmations+ controller actions don't seem to recognise the +params[:locale]+ in the request.
  # Those error occured after a user is saved into the database. By catching those 2 errors we can safely save users
  # into the database without throwing an error.
  rescue ActionView::Template::Error, ActionController::UrlGenerationError
    # Ignored
  end
end

users = [
  User.new(id: 1, email: 'grimm@grimm.io', password: '123456', password_confirmation: '123456'),
  User.new(id: 2, email: 'toto@toto.com', password: '123456', password_confirmation: '123456')
]
save_users(users)
puts '2 users created !'

ImportData.import_csv

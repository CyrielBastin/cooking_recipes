# frozen_string_literal: true

require_relative 'starting_data/import_data'

# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

users = [
  User.new(email: 'valtyr@valtyr.io', password: '123456', password_confirmation: '123456', jti: SecureRandom.uuid),
  User.new(email: 'toto@toto.com', password: '123456', password_confirmation: '123456', jti: SecureRandom.uuid)
]
users.each(&:save)
puts '2 users created !'

ImportData.import_csv
puts '------------------------------------------------------------------------------------------'
puts 'Import finished !'

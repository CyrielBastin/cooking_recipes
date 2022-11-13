# frozen_string_literal: true

require_relative 'starting_data/import_data'

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

users = [
  User.new(id: 1, email: 'grimm@grimm.io', password: '123456', password_confirmation: '123456'),
  User.new(id: 2, email: 'toto@toto.com', password: '123456', password_confirmation: '123456')
]
users.each(&:save)
puts '2 users created !'

ImportData.import_csv
puts '------------------------------------------------------------------------------------------'
puts 'Import finished !'

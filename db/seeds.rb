# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.new(email: 'root@root.root', password: '123456', password_confirmation: '123456')
user2 = User.new(email: 'grimm@grimm.grimm', password: '123456', password_confirmation: '123456')

user1.save
user2.save

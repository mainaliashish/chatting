# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user_1 = User.create(username: "ashish", password: "password")
user_2 = User.create(username: "ramesh", password: "password")
user_3 = User.create(username: "ashok", password: "password")

message_1 = Message.create(body: "testing message one", user_id: 2)
message_1 = Message.create(body: "testing message two", user_id: 1)
message_1 = Message.create(body: "testing message three", user_id: 2)

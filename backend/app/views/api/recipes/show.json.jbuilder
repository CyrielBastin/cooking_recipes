# frozen_string_literal: true

json.id @recipe.id
json.image @recipe.image
json.name @recipe.name
json.category_id @recipe.category_id
json.user_id @recipe.user_id
json.preparation_time @recipe.preparation_time
json.cooking_time @recipe.cooking_time
json.number_of_people @recipe.number_of_people
json.difficulty @recipe.difficulty
json.price @recipe.price
json.description @recipe.description
json.created_at @recipe.created_at
json.updated_at @recipe.updated_at

json.category do
  json.id @recipe.category.id
  json.name @recipe.category.name
end
json.user do
  json.id @recipe.user.id
  json.email @recipe.user.email
end

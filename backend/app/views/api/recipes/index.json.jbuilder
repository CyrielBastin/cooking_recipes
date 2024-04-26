# frozen_string_literal: true

json.array! @recipes do |recipe|
  json.id recipe.id
  json.image recipe.image
  json.name recipe.name
  json.category_id recipe.category_id
  json.country_id recipe.country_id
  json.user_id recipe.user_id
  json.preparation_time recipe.preparation_time
  json.cooking_time recipe.cooking_time
  json.number_of_people recipe.number_of_people
  json.difficulty recipe.difficulty
  json.price recipe.price
  json.description recipe.description
  json.created_at recipe.created_at
  json.updated_at recipe.updated_at

  json.category do
    json.id recipe.category.id
    json.name recipe.category.name
  end
  if recipe.country
    json.country do
      json.id recipe.country.id
      json.name recipe.country.name
    end
  end
  json.user do
    json.id recipe.user.id
    json.email recipe.user.email
  end
  if recipe.kitchenwares
    json.kitchenwares recipe.kitchenwares do |k|
      json.id k.id
      json.name k.name
      json.image k.image
    end
  end
  if recipe.ingredients_recipes
    json.ingredients recipe.ingredients_recipes do |i_r|
      json.id i_r.ingredient.id
      json.image i_r.ingredient.image
      json.name i_r.ingredient.name
      json.quantity i_r.quantity
      json.measure(i_r.measure.name) if i_r.measure
      json.comment i_r.comment
    end
  end
  if recipe.instructions_recipes
    json.instructions recipe.instructions_recipes do |i_r|
      json.step i_r.step
      json.comment i_r.comment
    end
  end
end

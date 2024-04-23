# frozen_string_literal: true

json.array! @ingredients do |ingredient|
  json.id ingredient.id
  json.image ingredient.image
  json.name ingredient.name
  json.created_at ingredient.created_at
  json.updated_at ingredient.updated_at
end

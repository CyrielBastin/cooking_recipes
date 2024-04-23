# frozen_string_literal: true

json.array! @countries do |country|
  json.id country.id
  json.image country.image
  json.name country.name
  json.created_at country.created_at
  json.updated_at country.updated_at
end

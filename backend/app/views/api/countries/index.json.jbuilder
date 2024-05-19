# frozen_string_literal: true

json.array! @countries do |country|
  json.id country.id
  json.image country.image
  json.name country.name
end

# frozen_string_literal: true

json.array! @kitchenwares do |kitchenware|
  json.id kitchenware.id
  json.image kitchenware.image
  json.name kitchenware.name
  json.created_at kitchenware.created_at
  json.updated_at kitchenware.updated_at
end

# frozen_string_literal: true

json.array! @kitchenwares do |kitchenware|
  json.id kitchenware.id
  json.image kitchenware.image
  json.name kitchenware.name
end

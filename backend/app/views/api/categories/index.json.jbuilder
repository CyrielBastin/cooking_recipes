# frozen_string_literal: true

json.array! @categories do |category|
  json.id category.id
  json.name category.name
  json.created_at category.created_at
  json.updated_at category.updated_at
  json.parent_id category.parent_id
end

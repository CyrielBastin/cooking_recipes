# frozen_string_literal: true

json.array! @measures do |measure|
  json.id measure.id
  json.name measure.name
  json.created_at measure.created_at
  json.updated_at measure.updated_at
end

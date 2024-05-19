# frozen_string_literal: true

json.array! @measures do |measure|
  json.id measure.id
  json.name measure.name
end

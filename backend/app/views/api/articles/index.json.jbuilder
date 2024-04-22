# frozen_string_literal: true

json.array! @articles do |article|
  json.id article.id
  json.image article.image
  json.title article.title
  json.content article.content
  json.created_at article.created_at
  json.updated_at article.updated_at
  json.user_id article.user_id

  json.user do
    json.id article.user.id
    json.email article.user.email
  end
end

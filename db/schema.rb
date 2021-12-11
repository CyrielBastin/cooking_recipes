# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_12_11_014351) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "article_translations", force: :cascade do |t|
    t.string "title"
    t.text "content"
    t.string "locale", null: false
    t.bigint "article_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["article_id", "locale"], name: "index_article_translations_on_article_id_and_locale", unique: true
    t.index ["locale"], name: "index_article_translations_on_locale"
    t.index ["title", "locale"], name: "index_article_translations_on_title_and_locale"
  end

  create_table "articles", force: :cascade do |t|
    t.string "image"
    t.bigint "user_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_articles_on_user_id"
  end

  create_table "categories", force: :cascade do |t|
    t.bigint "parent_id"
    t.index ["parent_id"], name: "index_categories_on_parent_id"
  end

  create_table "category_translations", force: :cascade do |t|
    t.string "name"
    t.string "locale", null: false
    t.bigint "category_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["category_id", "locale"], name: "index_category_translations_on_category_id_and_locale", unique: true
    t.index ["locale"], name: "index_category_translations_on_locale"
    t.index ["name", "locale"], name: "index_category_translations_on_name_and_locale"
  end

  create_table "countries", force: :cascade do |t|
    t.string "image"
  end

  create_table "countries_recipes", id: false, force: :cascade do |t|
    t.bigint "recipe_id", null: false
    t.bigint "country_id", null: false
    t.index ["country_id"], name: "index_countries_recipes_on_country_id"
    t.index ["recipe_id"], name: "index_countries_recipes_on_recipe_id"
  end

  create_table "country_translations", force: :cascade do |t|
    t.string "name"
    t.string "locale", null: false
    t.bigint "country_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["country_id", "locale"], name: "index_country_translations_on_country_id_and_locale", unique: true
    t.index ["locale"], name: "index_country_translations_on_locale"
    t.index ["name", "locale"], name: "index_country_translations_on_name_and_locale"
  end

  create_table "ingredient_translations", force: :cascade do |t|
    t.string "name"
    t.string "locale", null: false
    t.bigint "ingredient_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["ingredient_id", "locale"], name: "index_ingredient_translations_on_ingredient_id_and_locale", unique: true
    t.index ["locale"], name: "index_ingredient_translations_on_locale"
    t.index ["name", "locale"], name: "index_ingredient_translations_on_name_and_locale"
  end

  create_table "ingredients", force: :cascade do |t|
    t.string "image"
  end

  create_table "ingredients_recipes", force: :cascade do |t|
    t.bigint "recipe_id", null: false
    t.bigint "ingredient_id", null: false
    t.integer "quantity"
    t.bigint "measure_id"
    t.index ["measure_id"], name: "index_ingredients_recipes_on_measure_id"
  end

  create_table "ingredients_recipes_preparations", id: false, force: :cascade do |t|
    t.bigint "recipes_preparation_id", null: false
    t.bigint "ingredient_id", null: false
    t.index ["ingredient_id"], name: "ingredient_id_index"
    t.index ["recipes_preparation_id"], name: "recipes_preparation_id_index"
  end

  create_table "ingredients_recipes_translations", force: :cascade do |t|
    t.string "comment"
    t.string "locale", null: false
    t.bigint "ingredients_recipes_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["comment", "locale"], name: "index_ingredients_recipes_translations"
    t.index ["ingredients_recipes_id", "locale"], name: "index_97f25a69a629607a86f03beb8445978af3a95d73", unique: true
    t.index ["locale"], name: "index_ingredients_recipes_translations_on_locale"
  end

  create_table "kitchenware_translations", force: :cascade do |t|
    t.string "name"
    t.string "locale", null: false
    t.bigint "kitchenware_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["kitchenware_id", "locale"], name: "index_kitchenware_translations_on_kitchenware_id_and_locale", unique: true
    t.index ["locale"], name: "index_kitchenware_translations_on_locale"
    t.index ["name", "locale"], name: "index_kitchenware_translations_on_name_and_locale"
  end

  create_table "kitchenwares", force: :cascade do |t|
    t.string "image"
  end

  create_table "kitchenwares_recipes", id: false, force: :cascade do |t|
    t.bigint "recipe_id", null: false
    t.bigint "kitchenware_id", null: false
    t.index ["kitchenware_id"], name: "index_kitchenwares_recipes_on_kitchenware_id"
    t.index ["recipe_id"], name: "index_kitchenwares_recipes_on_recipe_id"
  end

  create_table "measure_translations", force: :cascade do |t|
    t.string "name"
    t.string "locale", null: false
    t.bigint "measure_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["locale"], name: "index_measure_translations_on_locale"
    t.index ["measure_id", "locale"], name: "index_measure_translations_on_measure_id_and_locale", unique: true
    t.index ["name", "locale"], name: "index_measure_translations_on_name_and_locale"
  end

  create_table "measures", force: :cascade do |t|
  end

  create_table "recipe_translations", force: :cascade do |t|
    t.string "name"
    t.string "locale", null: false
    t.bigint "recipe_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["locale"], name: "index_recipe_translations_on_locale"
    t.index ["name", "locale"], name: "index_recipe_translations_on_name_and_locale"
    t.index ["recipe_id", "locale"], name: "index_recipe_translations_on_recipe_id_and_locale", unique: true
  end

  create_table "recipes", force: :cascade do |t|
    t.bigint "category_id"
    t.bigint "user_id"
    t.integer "preparation_time"
    t.integer "cooking_time"
    t.integer "number_of_people"
    t.integer "difficulty"
    t.integer "price"
    t.string "image"
    t.string "user_comment"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["category_id"], name: "index_recipes_on_category_id"
    t.index ["user_id"], name: "index_recipes_on_user_id"
  end

  create_table "recipes_images", force: :cascade do |t|
    t.bigint "recipe_id"
    t.string "name"
    t.index ["recipe_id"], name: "index_recipes_images_on_recipe_id"
  end

  create_table "recipes_preparation_translations", force: :cascade do |t|
    t.string "detail"
    t.string "locale", null: false
    t.bigint "recipes_preparation_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["detail", "locale"], name: "index_recipes_preparation_translations_on_detail_and_locale"
    t.index ["locale"], name: "index_recipes_preparation_translations_on_locale"
    t.index ["recipes_preparation_id", "locale"], name: "index_803ced03984dbab88cdb9266c181b3691274b6b0", unique: true
  end

  create_table "recipes_preparations", force: :cascade do |t|
    t.bigint "recipe_id"
    t.integer "step"
    t.index ["recipe_id"], name: "index_recipes_preparations_on_recipe_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.string "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string "unconfirmed_email"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "article_translations", "articles"
  add_foreign_key "category_translations", "categories"
  add_foreign_key "country_translations", "countries"
  add_foreign_key "ingredient_translations", "ingredients"
  add_foreign_key "ingredients_recipes_translations", "ingredients_recipes", column: "ingredients_recipes_id"
  add_foreign_key "kitchenware_translations", "kitchenwares"
  add_foreign_key "measure_translations", "measures"
  add_foreign_key "recipe_translations", "recipes"
  add_foreign_key "recipes_preparation_translations", "recipes_preparations"
end

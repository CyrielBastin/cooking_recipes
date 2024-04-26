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

ActiveRecord::Schema[7.1].define(version: 2024_04_18_134321) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "articles", force: :cascade do |t|
    t.string "image"
    t.string "title"
    t.text "content"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_articles_on_user_id"
  end

  create_table "categories", force: :cascade do |t|
    t.bigint "parent_id"
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["parent_id"], name: "index_categories_on_parent_id"
  end

  create_table "countries", force: :cascade do |t|
    t.string "image"
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "countries_recipes", id: false, force: :cascade do |t|
    t.bigint "recipe_id", null: false
    t.bigint "country_id", null: false
    t.index ["country_id"], name: "index_countries_recipes_on_country_id"
    t.index ["recipe_id"], name: "index_countries_recipes_on_recipe_id"
  end

  create_table "ingredients", force: :cascade do |t|
    t.string "image"
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "ingredients_instructions_recipes", id: false, force: :cascade do |t|
    t.bigint "instructions_recipe_id", null: false
    t.bigint "ingredient_id", null: false
    t.index ["ingredient_id"], name: "ingredient_id_index"
    t.index ["instructions_recipe_id"], name: "instructions_recipe_id_index"
  end

  create_table "ingredients_recipes", force: :cascade do |t|
    t.bigint "recipe_id", null: false
    t.bigint "ingredient_id", null: false
    t.integer "quantity"
    t.string "comment"
    t.bigint "measure_id"
    t.index ["measure_id"], name: "index_ingredients_recipes_on_measure_id"
  end

  create_table "instructions_recipes", force: :cascade do |t|
    t.bigint "recipe_id"
    t.integer "step"
    t.string "comment"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["recipe_id"], name: "index_instructions_recipes_on_recipe_id"
  end

  create_table "kitchenwares", force: :cascade do |t|
    t.string "image"
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "kitchenwares_recipes", id: false, force: :cascade do |t|
    t.bigint "recipe_id", null: false
    t.bigint "kitchenware_id", null: false
    t.index ["kitchenware_id"], name: "index_kitchenwares_recipes_on_kitchenware_id"
    t.index ["recipe_id"], name: "index_kitchenwares_recipes_on_recipe_id"
  end

  create_table "measures", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "recipes", force: :cascade do |t|
    t.bigint "category_id"
    t.bigint "user_id"
    t.bigint "country_id"
    t.string "name"
    t.integer "preparation_time"
    t.integer "cooking_time"
    t.integer "number_of_people"
    t.integer "difficulty"
    t.integer "price"
    t.string "image"
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["category_id"], name: "index_recipes_on_category_id"
    t.index ["country_id"], name: "index_recipes_on_country_id"
    t.index ["user_id"], name: "index_recipes_on_user_id"
  end

  create_table "recipes_images", force: :cascade do |t|
    t.bigint "recipe_id"
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["recipe_id"], name: "index_recipes_images_on_recipe_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "categories", "categories", column: "parent_id"
end

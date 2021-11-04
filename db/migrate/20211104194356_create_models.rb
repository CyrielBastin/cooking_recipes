class CreateModels < ActiveRecord::Migration[6.1]
  def change
    create_table :ingredients do |t|
      t.string :name
      t.string :image
    end

    create_table :kitchenwares do |t|
      t.string :name
      t.string :image
    end

    create_table :categories do |t|
      t.string :name
      t.references :parent, reference: :category
    end

    create_table :articles do |t|
      t.string :title
      t.text :content
      t.references :user
      t.timestamps
    end

    create_table :countries do |t|
      t.string :name
      t.string :image
    end

    create_table :measures do |t|
      t.string :name
    end

    create_table :images do |t|
      t.string :name
      t.string :category
    end

    create_table :recipes do |t|
      t.string :name
      t.references :category
      t.references :user
      t.integer :preparation_time
      t.integer :cooking_time
      t.integer :number_of_people
      t.string :difficulty
      t.string :price
      t.string :image
      t.text :preparation
      t.string :user_comment
      t.timestamps
    end

    create_table :recipe_ingredients do |t|
      t.references :recipe
      t.references :ingredient
      t.integer :quantity
      t.references :measure
    end

    create_table :recipe_kitchenwares do |t|
      t.references :recipe
      t.references :kitchenware
    end

    create_table :recipe_images do |t|
      t.references :recipe
      t.references :image
    end

    create_table :recipe_countries do |t|
      t.references :recipe
      t.references :country
    end
  end
end

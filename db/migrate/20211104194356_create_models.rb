class CreateModels < ActiveRecord::Migration[6.1]
  def change
    create_table :ingredients do |t|
      t.string :image
    end

    create_table :kitchenwares do |t|
      t.string :image
    end

    create_table :categories do |t|
      t.references :parent, reference: :category
    end

    create_table :articles do |t|
      t.string :image
      t.references :user
      t.timestamps
    end

    create_table :countries do |t|
      t.string :image
    end

    create_table :measures

    create_table :recipes do |t|
      t.references :category
      t.references :user
      t.integer :preparation_time
      t.integer :cooking_time
      t.integer :number_of_people
      t.integer :difficulty
      t.integer :price
      t.string :image
      t.string :user_comment
      t.timestamps
    end

    create_table :recipes_images do |t|
      t.references :recipe
      t.string :name
    end

    create_join_table :recipes, :ingredients, primary_key: :id do |t|
      t.integer :quantity
      t.references :measure
    end
    add_column :ingredients_recipes, :id, :primary_key

    create_table :recipes_preparations do |t|
      t.references :recipe
      t.integer :step
    end

    create_join_table :recipes_preparations, :ingredients do |t|
      t.index :recipes_preparation_id, name: :recipes_preparation_id_index
      t.index :ingredient_id, name: :ingredient_id_index
    end
    create_join_table :recipes, :kitchenwares do |t|
      t.index :recipe_id
      t.index :kitchenware_id
    end
    create_join_table :recipes, :countries do |t|
      t.index :recipe_id
      t.index :country_id
    end
  end
end

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
      t.string :image
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

    create_table :recipes do |t|
      t.string :name
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

    create_join_table :recipes, :ingredients do |t|
      t.integer :quantity
      t.references :measure
      t.string :comment
    end

    create_table :recipes_preparation do |t|
      t.references :recipe
      t.integer :step
      t.string :detail
    end

    create_join_table :recipes_preparation, :ingredients
    create_join_table :recipes, :kitchenwares
    create_join_table :recipes, :countries
  end
end

class CreateIngredientsRecipeCommentTranslationsForMobilityTableBackend < ActiveRecord::Migration[6.1]
  def change
    create_table :ingredients_recipe_translations do |t|

      # Translated attribute(s)
      t.string :comment

      t.string  :locale, null: false
      t.references :ingredients_recipe, null: false, foreign_key: true, index: false

      t.timestamps null: false
    end

    add_index :ingredients_recipe_translations, :locale, name: :index_ingredients_recipe_translations_on_locale
    add_index :ingredients_recipe_translations, [:ingredients_recipe_id, :locale], name: :index_97f25a69a629607a86f03beb8445978af3a95d73, unique: true

  add_index :ingredients_recipe_translations, [:comment, :locale], name: :index_ingredients_recipe_translations
  end
end

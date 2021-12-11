class CreateIngredientsRecipesCommentTranslationsForMobilityTableBackend < ActiveRecord::Migration[6.1]
  def change
    create_table :ingredients_recipes_translations do |t|

      # Translated attribute(s)
      t.string :comment

      t.string  :locale, null: false
      t.references :ingredients_recipes, null: false, foreign_key: true, index: false

      t.timestamps null: false
    end

    add_index :ingredients_recipes_translations, :locale, name: :index_ingredients_recipes_translations_on_locale
    add_index :ingredients_recipes_translations, [:ingredients_recipes_id, :locale], name: :index_97f25a69a629607a86f03beb8445978af3a95d73, unique: true

  add_index :ingredients_recipes_translations, [:comment, :locale], name: :index_ingredients_recipes_translations
  end
end

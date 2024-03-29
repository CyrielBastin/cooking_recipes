class CreateRecipeNameTranslationsForMobilityTableBackend < ActiveRecord::Migration[7.0]
  def change
    create_table :recipe_translations do |t|

      # Translated attribute(s)
      t.string :name

      t.string  :locale, null: false
      t.references :recipe, null: false, foreign_key: true, index: false

      t.timestamps null: false
    end

    add_index :recipe_translations, :locale, name: :index_recipe_translations_on_locale
    add_index :recipe_translations, [:recipe_id, :locale], name: :index_recipe_translations_on_recipe_id_and_locale, unique: true

  end
end

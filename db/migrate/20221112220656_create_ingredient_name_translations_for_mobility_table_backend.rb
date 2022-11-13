class CreateIngredientNameTranslationsForMobilityTableBackend < ActiveRecord::Migration[7.0]
  def change
    create_table :ingredient_translations do |t|

      # Translated attribute(s)
      t.string :name

      t.string  :locale, null: false
      t.references :ingredient, null: false, foreign_key: true, index: false

      t.timestamps null: false
    end

    add_index :ingredient_translations, :locale, name: :index_ingredient_translations_on_locale
    add_index :ingredient_translations, [:ingredient_id, :locale], name: :index_ingredient_translations_on_ingredient_id_and_locale, unique: true

  end
end

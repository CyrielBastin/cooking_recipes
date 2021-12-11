class CreateRecipesPreparationDetailTranslationsForMobilityTableBackend < ActiveRecord::Migration[6.1]
  def change
    create_table :recipes_preparation_translations do |t|

      # Translated attribute(s)
      t.string :detail

      t.string  :locale, null: false
      t.references :recipes_preparation, null: false, foreign_key: true, index: false

      t.timestamps null: false
    end

    add_index :recipes_preparation_translations, :locale, name: :index_recipes_preparation_translations_on_locale
    add_index :recipes_preparation_translations, [:recipes_preparation_id, :locale], name: :index_803ced03984dbab88cdb9266c181b3691274b6b0, unique: true

  add_index :recipes_preparation_translations, [:detail, :locale], name: :index_recipes_preparation_translations_on_detail_and_locale
  end
end

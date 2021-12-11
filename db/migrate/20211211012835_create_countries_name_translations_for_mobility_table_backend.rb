class CreateCountriesNameTranslationsForMobilityTableBackend < ActiveRecord::Migration[6.1]
  def change
    create_table :country_translations do |t|

      # Translated attribute(s)
      t.string :name

      t.string  :locale, null: false
      t.references :country, null: false, foreign_key: true, index: false

      t.timestamps null: false
    end

    add_index :country_translations, :locale, name: :index_country_translations_on_locale
    add_index :country_translations, [:country_id, :locale], name: :index_country_translations_on_country_id_and_locale, unique: true

  add_index :country_translations, [:name, :locale], name: :index_country_translations_on_name_and_locale
  end
end

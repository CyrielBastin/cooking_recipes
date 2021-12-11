class CreateKitchenwareNameTranslationsForMobilityTableBackend < ActiveRecord::Migration[6.1]
  def change
    create_table :kitchenware_translations do |t|

      # Translated attribute(s)
      t.string :name

      t.string  :locale, null: false
      t.references :kitchenware, null: false, foreign_key: true, index: false

      t.timestamps null: false
    end

    add_index :kitchenware_translations, :locale, name: :index_kitchenware_translations_on_locale
    add_index :kitchenware_translations, [:kitchenware_id, :locale], name: :index_kitchenware_translations_on_kitchenware_id_and_locale, unique: true

  add_index :kitchenware_translations, [:name, :locale], name: :index_kitchenware_translations_on_name_and_locale
  end
end

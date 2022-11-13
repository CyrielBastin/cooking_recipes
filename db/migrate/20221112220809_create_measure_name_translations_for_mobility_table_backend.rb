class CreateMeasureNameTranslationsForMobilityTableBackend < ActiveRecord::Migration[7.0]
  def change
    create_table :measure_translations do |t|

      # Translated attribute(s)
      t.string :name

      t.string  :locale, null: false
      t.references :measure, null: false, foreign_key: true, index: false

      t.timestamps null: false
    end

    add_index :measure_translations, :locale, name: :index_measure_translations_on_locale
    add_index :measure_translations, [:measure_id, :locale], name: :index_measure_translations_on_measure_id_and_locale, unique: true

  end
end

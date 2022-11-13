class CreateArticleTitleAndContentTranslationsForMobilityTableBackend < ActiveRecord::Migration[7.0]
  def change
    create_table :article_translations do |t|

      # Translated attribute(s)
      t.string :title
      t.text :content

      t.string  :locale, null: false
      t.references :article, null: false, foreign_key: true, index: false

      t.timestamps null: false
    end

    add_index :article_translations, :locale, name: :index_article_translations_on_locale
    add_index :article_translations, [:article_id, :locale], name: :index_article_translations_on_article_id_and_locale, unique: true

  end
end

# frozen_string_literal: true

require 'csv'

# Module to import starting data
# In order for it to work, ACTIVATE the plugin +fallthrough_accessors+ from the +Mobility+ gem
module ImportData

  def self.import_csv
    import_articles
    # import_categories
    # import_countries
    # import_ingredients
    # import_kitchenwares
    # import_measures
    # import_recipes
    # import_countries_recipes
    # import_ingredients_recipes
    # import_kitchenwares_recipes
    # import_recipes_preparation
    # import_ingredients_recipes_preparation
  end

  class << self
    private

    def path(file_name)
      Rails.root.join('db', 'starting_data', "#{file_name}.csv")
    end

    def import_articles
      # Returns an array of hashes
      # [{"id":"1", "image":"path/image1.png", "title_en":"Ideas for breakfast", ...},
      # {"id":"2", "image":"path/image2.png", "title_en":"Cheese for Christmas", ...}]
      # articles = CSV.read path(:articles), headers: true
      CSV.foreach path(:articles), headers: true, col_sep: '|', strip: true do |row|
        pp row
      end
    end

    def import_categories
    end

    def import_countries
    end

    def import_ingredients
    end

    def import_kitchenwares
    end

    def import_measures
    end

    def import_recipes
    end

    def import_countries_recipes
    end

    def import_ingredients_recipes
    end

    def import_kitchenwares_recipes
    end

    def import_recipes_preparation
    end

    def import_ingredients_recipes_preparation
    end
  end

end

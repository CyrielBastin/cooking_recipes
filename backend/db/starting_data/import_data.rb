# frozen_string_literal: true

require 'csv'

# Module to import starting data
module ImportData

  def self.import_csv
    import_articles
    import_categories
    import_countries
    import_ingredients
    import_kitchenwares
    import_measures
    import_recipes
    import_ingredients_recipes
    import_kitchenwares_recipes
    import_instructions_recipes
    import_ingredients_instructions_recipes
  end

  class << self
    private

    def path(file_name)
      Rails.root.join('db', 'starting_data', "#{file_name}.csv")
    end

    def default_options
      { headers: true, col_sep: '|', strip: true }
    end

    def import_articles
      # Returns an array of hashes
      # [{"id":"1", "image":"path/image1.png", "title_en":"Ideas for breakfast", ...},
      # {"id":"2", "image":"path/image2.png", "title_en":"Cheese for Christmas", ...}]
      # articles = CSV.read path(:articles), headers: true
      count = 0
      CSV.foreach path(:articles), **default_options do |row|
        article = Article.new do |a|
          a.image = row['image']
          a.user_id = row['user_id']
          a.title = row['title_en']
          a.content = row['content_en']
        end
        count += 1 if article.save
      end
      puts "#{count} Articles created !"
    end

    def import_categories
      count = 0
      CSV.foreach path(:categories), **default_options do |row|
        category = Category.new do |c|
          c.parent_id = row['parent_id']
          c.name = row['name_en']
        end
        count += 1 if category.save
      end
      puts "#{count} Categories created !"
    end

    def import_countries
      count = 0
      CSV.foreach path(:countries), **default_options do |row|
        country = Country.new do |c|
          c.image = row['image']
          c.name = row['name_en']
        end
        count += 1 if country.save
      end
      puts "#{count} Countries created !"
    end

    def import_ingredients
      count = 0
      CSV.foreach path(:ingredients), **default_options do |row|
        ingredient = Ingredient.new do |i|
          i.image = row['image']
          i.name = row['name_en']
        end
        count += 1 if ingredient.save
      end
      puts "#{count} Ingredients created !"
    end

    def import_kitchenwares
      count = 0
      CSV.foreach path(:kitchenwares), **default_options do |row|
        kitchenware = Kitchenware.new do |k|
          k.image = row['image']
          k.name = row['name_en']
        end
        count += 1 if kitchenware.save
      end
      puts "#{count} Kitchenwares created !"
    end

    def import_measures
      count = 0
      CSV.foreach path(:measures), **default_options do |row|
        measure = Measure.new do |m|
          m.name = row['name_en']
        end
        count += 1 if measure.save
      end
      puts "#{count} Measures created !"
    end

    def import_recipes
      count = 0
      CSV.foreach path(:recipes), **default_options do |row|
        recipe = Recipe.new do |r|
          r.category_id = row['category_id']
          r.country_id = row['country_id']
          r.user_id = row['user_id']
          r.preparation_time = row['preparation_time']
          r.cooking_time = row['cooking_time']
          r.number_of_people = row['number_of_people']
          r.difficulty = row['difficulty']
          r.price = row['price']
          r.image = row['image']
          r.description = row['description']
          r.name = row['name_en']
        end
        count += 1 if recipe.save
      end
      puts "#{count} Recipes created !"
    end

    def import_ingredients_recipes
      count = 0
      CSV.foreach path(:ingredients_recipes), **default_options do |row|
        ingredient_recipe = IngredientsRecipe.new do |ir|
          ir.recipe_id = row['recipe_id']
          ir.ingredient_id = row['ingredient_id']
          ir.quantity = row['qty']
          ir.measure_id = row['measure_id']
          ir.comment = row['comment_en']
        end
        count += 1 if ingredient_recipe.save
      end
      puts "#{count} Ingredients Recipes created !"
    end

    def import_kitchenwares_recipes
      count = 0
      CSV.foreach path(:kitchenwares_recipes), **default_options do |row|
        recipe = Recipe.find(row['recipe_id'].to_i)
        recipe.kitchenwares << Kitchenware.find(row['kitchenware_id'].to_i)

        count += 1 if recipe.save
      end
      puts "#{count} Kitchenwares Recipes created !"
    end

    def import_instructions_recipes
      count = 0
      CSV.foreach path(:instructions_recipes), **default_options do |row|
        instruction_recipe = InstructionsRecipe.new do |i_r|
          i_r.recipe_id = row['recipe_id']
          i_r.step = row['step']
          i_r.comment = row['comment_en']
        end
        count += 1 if instruction_recipe.save
      end
      puts "#{count} Instructions Recipes created !"
    end

    def import_ingredients_instructions_recipes
      count = 0
      CSV.foreach path(:ingredients_instructions_recipes), **default_options do |row|
        i_r = InstructionsRecipe.find(row['instructions_recipe_id'].to_i)
        i_r.ingredients << Ingredient.find(row['ingredient_id'].to_i)

        count += 1 if i_r.save
      end
      puts "#{count} Ingredients Instructions Recipes created !"
    end
  end

end

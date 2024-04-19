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
    import_countries_recipes
    import_ingredients_recipes
    import_kitchenwares_recipes
    import_recipes_preparation
    import_ingredients_recipes_preparation
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
          a.user = User.find(row['user_id'].to_i)
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
          r.category = Category.find(row['category_id'].to_i)
          r.user = User.find(row['user_id'].to_i)
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

    def import_countries_recipes
      count = 0
      CSV.foreach path(:countries_recipes), **default_options do |row|
        recipe = Recipe.find(row['recipe_id'].to_i)
        recipe.countries << Country.find(row['country_id'].to_i)

        count += 1 if recipe.save
      end
      puts "#{count} Countries Recipes created !"
    end

    def import_ingredients_recipes
      count = 0
      CSV.foreach path(:ingredients_recipes), **default_options do |row|
        ingredient_recipe = IngredientsRecipe.new do |ir|
          ir.recipe = Recipe.find(row['recipe_id'].to_i)
          ir.ingredient = Ingredient.find(row['ingredient_id'].to_i)
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

    def import_recipes_preparation
      count = 0
      CSV.foreach path(:recipes_preparation), **default_options do |row|
        recipe_preparation = RecipesPreparation.new do |rp|
          rp.recipe = Recipe.find(row['recipe_id'].to_i)
          rp.step = row['step']
          rp.detail = row['detail_en']
        end
        count += 1 if recipe_preparation.save
      end
      puts "#{count} Recipes Preparation created !"
    end

    def import_ingredients_recipes_preparation
      count = 0
      CSV.foreach path(:ingredients_recipes_preparation), **default_options do |row|
        i_r_p = IngredientsRecipesPreparation.new do |irp|
          irp.recipes_preparation = RecipesPreparation.find(row['recipes_preparation_id'].to_i)
          irp.ingredient = Ingredient.find(row['ingredient_id'].to_i)
        end
        count += 1 if i_r_p.save
      end
      puts "#{count} Ingredients Recipes Preparation created !"
    end
  end

end

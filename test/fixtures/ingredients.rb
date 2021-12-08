module Fixtures
  module Ingredients

    def self.salt
      Ingredient.new do |i|
        i.name = 'Salt'
        i.image = 'ingredients/salt.png'
      end
    end

    def self.potato
      Ingredient.new do |i|
        i.name = 'Potato'
        i.image = 'ingredients/potato.png'
      end
    end

    def self.onion
      Ingredient.new do |i|
        i.name = 'Onion'
        i.image = 'ingredients/onion.png'
      end
    end

    def self.tomato
      Ingredient.new do |i|
        i.name = 'Tomato'
        i.image = 'ingredients/tomato.png'
      end
    end

    def self.parsley
      Ingredient.new do |i|
        i.name = 'Parsley'
        i.image = 'ingredients/parsley.png'
      end
    end

  end
end

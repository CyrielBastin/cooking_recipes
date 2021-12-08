module Fixtures
  module Categories

    def self.main_course
      Category.new { |c| c.name = 'Main course' }
    end

    def self.sauce
      Category.new { |c| c.name = 'Sauce' }
    end

    def self.meat
      Category.new do |c|
        c.name = 'Meat'
        c.parent = main_course
      end
    end

    def self.lamb
      Category.new do |c|
        c.name = 'Lamb'
        c.parent = meat
      end
    end

  end
end

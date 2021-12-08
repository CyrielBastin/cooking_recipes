module Fixtures
  module Kitchenwares

    def self.whisk
      Kitchenware.new do |k|
        k.name = 'Whisk'
      end
    end

    def self.oven
      Kitchenware.new do |k|
        k.name = 'Oven'
        k.image = 'kitchenwares/oven.png'
      end
    end

    def self.pan
      Kitchenware.new do |k|
        k.name = 'Pan'
        k.image = 'kitchenwares/pan.png'
      end
    end

  end
end

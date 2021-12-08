module Fixtures
  module Articles

    def self.belgian_cuisine
      Article.new do |a|
        a.title = 'Belgian Cuisine'
        a.image = 'path/to/image.png'
        a.content = 'Try out belgian cuisine, it can be fabulous !'
        a.user = Users.grimm
      end
    end

    def self.cheese_for_christmas
      Article.new do |a|
        a.title = 'Cheese for Christmas'
        a.image = 'path/to/image2.png'
        a.content = 'Here, you will find our selection of great cheese to eat on Christmas'
        a.user = Users.grimm
      end
    end

  end
end

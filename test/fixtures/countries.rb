module Fixtures
  module Countries

    def self.france
      Country.new do |c|
        c.name = 'France'
        c.image = 'countries/france.png'
      end
    end

    def self.italy
      Country.new do |c|
        c.name = 'Italy'
        c.image = 'countries/italy.png'
      end
    end

  end
end

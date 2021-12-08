require 'test_helper'
require_relative '../fixtures/countries'

class CountryTest < ActiveSupport::TestCase

  def get_country
    Country.new do |c|
      c.name = 'New Zealand'
      c.image = 'countries/new_zealand.png'
    end
  end

  test 'should not save a country without name' do
    c = get_country
    c.name = nil

    assert_not c.save
  end

  test 'country should have a unique name' do
    c = get_country
    c2 = Country.new do |c_|
      c_.name = 'New Zealand'
      c_.image = '...'
    end

    assert c.save
    assert_not c2.save
  end

  # test 'should not save a country without image' do
  #   c = get_country
  #   c.image = nil
  #
  #   assert_not c.save
  # end

  test '`france` should have 2 recipes' do
    c = Fixtures::Countries.france

    assert_equal 2, c.recipes.count
  end

  test '`france` should have recipe `blanquette`' do
    c = Fixtures::Countries.france
    blanquettes = c.recipes.filter { |r| r.name == 'Blanquette' }

    assert blanquettes
    assert_equal 'Blanquette', blanquettes[0].name
  end

end

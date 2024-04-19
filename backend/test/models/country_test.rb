# frozen_string_literal: true

require 'test_helper'

class CountryTest < ActiveSupport::TestCase

  def dummy_country
    Country.new do |c|
      c.name = 'New Zealand'
      c.image = 'countries/new_zealand.png'
    end
  end

  test 'should not save a country without name' do
    c = dummy_country
    c.name = nil

    assert_not c.save
  end

  test 'country should have a unique name' do
    c1 = dummy_country
    c2 = Country.new do |c|
      c.name = 'New Zealand'
      c.image = '...'
    end

    assert c1.save
    assert_not c2.save
  end

  test 'country `france` should have 2 recipes' do
    c = countries :france

    assert_equal 2, c.recipes.count
  end

  test 'country `france` should have recipe `blanquette`' do
    c = countries :france
    blanquette = c.recipes.filter { |r| r.name == 'Blanquette' }.at(0)

    if assert blanquette
      assert_equal 'Blanquette', blanquette.name
    end
  end

  test 'country `italy` should have name: `Italy`' do
    c = countries :italy

    assert_equal 'Italy', c.name
  end

end

# frozen_string_literal: true

require 'test_helper'

class CountryTest < ActiveSupport::TestCase

  def dummy_country
    I18n.locale = :en
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
    I18n.locale = :en
    c1 = dummy_country
    c2 = Country.new do |c|
      c.name = 'New Zealand'
      c.image = '...'
    end

    assert c1.save
    assert_not c2.save
    I18n.locale = I18n.default_locale
  end

  test '`france` should have 2 recipes' do
    c = countries :france

    assert_equal 2, c.recipes.count
  end

  test '`france` should have recipe `blanquette`' do
    c = countries :france
    blanquette = c.recipes.filter { |r| r.name == 'Blanquette' }.at(0)

    if assert blanquette
      assert_equal 'Blanquette', blanquette.name
    end
  end

  test '`italy` should have french name `Italie`' do
    I18n.locale = :fr
    c = countries :italy

    assert_equal 'Italie', c.name
    I18n.locale = :en
  end

  test '`france` and `italy` fallthrough accessors' do
    france = countries :france
    italy = countries :italy

    assert_equal 'France', france.name_en
    assert_equal 'France', france.name_fr
    assert_equal 'Italy', italy.name_en
    assert_equal 'Italie', italy.name_fr
  end

  test 'country fallthrough accessors' do
    c = dummy_country
    c.name_en = 'Belgium'
    c.name_fr = 'Belgique'

    if assert c.save
      assert_equal 'Belgique', c.name_fr
      assert_equal 'Belgium', c.name_en
    end
  end

end

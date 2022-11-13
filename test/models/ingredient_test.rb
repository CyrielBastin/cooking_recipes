# frozen_string_literal: true

require 'test_helper'

class CountryTest < ActiveSupport::TestCase

  def dummy_ingredient
    I18n.locale = :en
    Ingredient.new do |i|
      i.name = 'Flour'
      i.image = 'ingredients/flour.png'
    end
  end

  test 'should not save ingredient without name' do
    i = dummy_ingredient
    i.name = nil

    assert_not i.save
  end

  test 'ingredient should have a unique name' do
    I18n.locale = :en
    i1 = dummy_ingredient
    i2 = Ingredient.new do |i|
      i.name = 'Flour'
      i.image = '...'
    end

    assert i1.save
    assert_not i2.save
    I18n.locale = I18n.default_locale
  end

  test '`salt` should have 3 recipes' do
    i = ingredients :salt

    assert_equal 3, i.recipes.count
  end

  test '`tomato` should have recipe `bolognese`' do
    I18n.locale = :en
    i = ingredients :tomato
    bolognese = i.recipes.filter { |r| r.name == 'Bolognese' }.at(0)

    if assert bolognese
      assert_equal 'Bolognese', bolognese.name
    end
    I18n.locale = I18n.default_locale
  end

  test '`potato` french name should be `Pommes de terre`' do
    I18n.locale = :fr
    i = ingredients :potato

    assert_equal 'Pommes de terre', i.name
    I18n.locale = I18n.default_locale
  end

  test '`parsley` french name should be `Persil` and should not have an image' do
    I18n.locale = :fr
    i = ingredients :parsley

    assert_equal 'Persil', i.name
    assert_nil i.image
    I18n.locale = I18n.default_locale
  end

  test '`salt` and `onion` fallthrough accessors' do
    salt = ingredients :salt
    onion = ingredients :onion

    assert_equal 'Salt', salt.name_en
    assert_equal 'Sel', salt.name_fr
    assert_equal 'Onion', onion.name_en
    assert_equal 'Oignon', onion.name_fr
  end

  test 'ingredient fallthrough accessors' do
    i = dummy_ingredient
    i.name_en = 'Pepper'
    i.name_fr = 'Poivre'

    if assert i.save
      assert_equal 'Poivre', i.name_fr
      assert_equal 'Pepper', i.name_en
    end
  end

end

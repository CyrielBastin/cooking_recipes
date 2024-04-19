# frozen_string_literal: true

require 'test_helper'

class IngredientTest < ActiveSupport::TestCase

  def dummy_ingredient
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
    i1 = dummy_ingredient
    i2 = Ingredient.new do |i|
      i.name = 'Flour'
      i.image = '...'
    end

    assert i1.save
    assert_not i2.save
  end

  test 'ingredient `salt` should have 3 recipes' do
    i = ingredients :salt

    assert_equal 3, i.recipes.count
  end

  test 'ingredient `tomato` should have recipe `bolognese`' do
    i = ingredients :tomato
    bolognese = i.recipes.filter { |r| r.name == 'Bolognese' }.at(0)

    if assert bolognese
      assert_equal 'Bolognese', bolognese.name
    end
  end

  test 'ingredient `potato` name is: `Potato`' do
    i = ingredients :potato

    assert_equal 'Potato', i.name
  end

  test 'ingredient `parsley` name is: `Parsley` and does not have an image' do
    i = ingredients :parsley

    assert_equal 'Parsley', i.name
    assert_nil i.image
  end

end

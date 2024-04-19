# frozen_string_literal: true

require 'test_helper'

class IngredientsRecipeTest < ActiveSupport::TestCase

  def dummy_ingredient
    IngredientsRecipe.new do |i|
      i.recipe = recipes :tartiflette
      i.ingredient = ingredients :potato
      i.measure = measures :gram
      i.quantity = 300
    end
  end

  test 'ingredient\'s quantity is optional' do
    i = dummy_ingredient
    i.quantity = nil

    assert i.save
  end

  test 'ingredient\'s quantity should be a number' do
    i = dummy_ingredient
    i.quantity = 'not a number'
    assert_not i.save
    i.quantity = 99

    assert i.save
  end

  test 'ingredient\'s quantity should be > 0' do
    i = dummy_ingredient
    i.quantity = 0
    assert_not i.save
    i.quantity = -25
    assert_not i.save
    i.quantity = 1

    assert i.save
  end

  test 'ingredient_recipe comment should be <= 150 char' do
    i = dummy_ingredient
    i.comment = 'yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy' # 151 chars

    assert_not i.save
    i.comment = 'yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy' # 150 chars
    assert i.save
  end

  test '`bolo_onion` belongs to recipe `bolognese`' do
    i = ingredients_recipes :bolo_onion

    assert_equal 'Bolognese', i.recipe.name
  end

  test '`bolo_parsley` quantity should be 15g' do
    i = ingredients_recipes :bolo_parsley

    assert_equal 15, i.quantity
    assert_equal 'g', i.measure.name
  end

  test '`bolo_parsley` comment is: `chopped`' do
    i = ingredients_recipes :bolo_parsley

    assert_equal 'chopped', i.comment
  end

  test '`bolo_onion` should not have any associated comments' do
    i = ingredients_recipes :bolo_onion

    assert_nil i.comment
  end

end

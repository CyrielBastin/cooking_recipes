require 'test_helper'

class IngredientsRecipeTest < ActiveSupport::TestCase

  def get_ingredient
    IngredientsRecipe.new do |i|
      i.recipe = recipes(:tartiflette)
      i.ingredient = ingredients(:potato)
      i.measure = measures(:gram)
      i.quantity = 300
    end
  end

  test 'ingredient\' quantity is optional' do
    i = get_ingredient
    i.quantity = nil

    assert i.save
  end

  test 'ingredient\' quantity should be a number' do
    i = get_ingredient
    i.quantity = 'not a number'
    assert_not i.save
    i.quantity = 99

    assert i.save
  end

  test 'ingredient\' quantity should be > 0' do
    i = get_ingredient
    i.quantity = 0
    assert_not i.save
    i.quantity = -25
    assert_not i.save
    i.quantity = 1

    assert i.save
  end

end

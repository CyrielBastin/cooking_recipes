require 'test_helper'

class CountryTest < ActiveSupport::TestCase

  def get_ingredient
    Ingredient.new do |i|
      i.name = 'Flour'
      i.image = 'ingredients/flour.png'
    end
  end

  test 'should not save ingredient without name' do
    i = get_ingredient
    i.name = nil

    assert_not i.save
  end

  test 'ingredient should have a unique name' do
    i = get_ingredient
    i2 = Ingredient.new do |i|
      i.name = 'Flour'
      i.image = '...'
    end

    assert i.save
    assert_not i2.save
  end

  test 'should not save ingredient without image' do
    i = get_ingredient
    i.image = nil

    assert_not i.save
  end

  test '`salt` should have 3 recipes' do
    i = ingredients(:salt)

    assert_equal 3, i.recipes.count
  end

  test '`tomato` should have recipe `bolognese`' do
    i = ingredients(:tomato)
    bologneses = i.recipes.filter { |r| r.name == 'Bolognese' }

    assert bologneses
    assert_equal 'Bolognese', bologneses[0].name
  end

end

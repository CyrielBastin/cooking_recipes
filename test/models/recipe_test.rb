# frozen_string_literal: true

require 'test_helper'

class RecipeTest < ActiveSupport::TestCase

  def get_recipe
    Recipe.new do |r|
      r.name = 'Lasagna'
      r.category = categories(:main_course)
      r.user = users(:grimm)
      r.preparation_time = 120
      r.cooking_time = 25
      r.number_of_people = 4
      r.difficulty = 'easy'
      r.price = 'low'
      r.image = 'recipes/lasagna.png'
      r.preparation = 'Quite a long preparation'
      r.user_comment = 'This lasagna is a beast'
    end
  end

  test 'should not save a recipe without a name' do
    r = get_recipe
    r.name = nil

    assert_not r.save
  end

  test 'should not save a recipe without a category' do
    r = get_recipe
    r.category = nil

    assert_not r.save
  end

  test 'should not save a recipe without an author' do
    r = get_recipe
    r.user = nil

    assert_not r.save
  end

  test 'preparation time should be a number' do
    r = get_recipe
    r.preparation_time = 'not a number'

    assert_not r.save
  end

  test 'preparation time should be > 0' do
    r = get_recipe
    r.preparation_time = 0

    assert_not r.save
    r.preparation_time = -25
    assert_not r.save
  end

  test 'cooking time should be a number' do
    r = get_recipe
    r.cooking_time = 'not a number'

    assert_not r.save
  end

  test 'cooking time should be > 0' do
    r = get_recipe
    r.cooking_time = 0

    assert_not r.save
    r.cooking_time = -25
    assert_not r.save
  end

  test 'number of people should be a number' do
    r = get_recipe
    r.number_of_people = 'not a number'

    assert_not r.save
  end

  test 'number of people should be > 0' do
    r = get_recipe
    r.number_of_people = 0

    assert_not r.save
    r.number_of_people = -25
    assert_not r.save
  end

  test 'difficulty should be `easy` | `normal` | `hard`' do
    r = get_recipe

    r.difficulty = 'easy'
    assert r.save
    r.difficulty = 'normal'
    assert r.save
    r.difficulty = 'hard'
    assert r.save
  end

  test 'price should be `low` | `medium` | `high`' do
    r = get_recipe

    r.price = 'low'
    assert r.save
    r.price = 'medium'
    assert r.save
    r.price = 'high'
    assert r.save
  end

  test 'should not save a recipe without image' do
    r = get_recipe
    r.image = nil

    assert_not r.save
  end

  test 'should not save a recipe without preparation' do
    r = get_recipe
    r.preparation = nil

    assert_not r.save
  end

  test '`blanquette` number of people should be 4' do
    r = recipes(:blanquette)

    assert_equal 4, r.number_of_people
  end

  test '`blanquette` ingredients should contain `salt` & `parsley`' do
    r = recipes(:blanquette)
    salt_r = r.ingredients.filter { |i| i.name == 'Salt' }
    parsley_r = r.ingredients.filter { |i| i.name = 'Parsley' }

    assert salt_r
    assert parsley_r
  end

  test '`tartiflette` country should be `france`' do
    r = recipes(:tartiflette)
    r_france = r.countries.filter { |c| c.name == 'France' }

    assert r_france
  end

  test '`bolognese` kitchenware should contain `pan` & `whisk`' do
    r = recipes(:bolognese)
    pan_r = r.kitchenwares.filter { |k| k.name == 'Pan' }
    whisk_r = r.kitchenwares.filter { |k| k.name = 'Whisk' }

    assert pan_r
    assert whisk_r
  end

end

# frozen_string_literal: true

require 'test_helper'

class RecipeTest < ActiveSupport::TestCase

  def dummy_recipe
    I18n.locale = :en
    Recipe.new do |r|
      r.name = 'Lasagna'
      r.category = categories :main_course
      r.user = users :grimm
      r.preparation_time = 120
      r.cooking_time = 25
      r.number_of_people = 4
      r.difficulty = 'easy'
      r.price = 'low'
      r.image = 'recipes/lasagna.png'
      r.user_comment = 'This lasagna is a beast'
    end
  end

  test 'should not save a recipe without a name' do
    r = dummy_recipe
    r.name = nil

    assert_not r.save
  end

  test 'should not save a recipe without a category' do
    r = dummy_recipe
    r.category = nil

    assert_not r.save
  end

  test 'should not save a recipe without an author' do
    r = dummy_recipe
    r.user = nil

    assert_not r.save
  end

  test 'preparation time should be a number' do
    r = dummy_recipe
    r.preparation_time = 'not a number'
    assert_not r.save

    r.preparation_time = 15
    assert r.save
  end

  test 'preparation time should be > 0' do
    r = dummy_recipe
    r.preparation_time = 0

    assert_not r.save
    r.preparation_time = -25
    assert_not r.save
    r.preparation_time = 1
    assert r.save
  end

  test 'cooking time should be a number' do
    r = dummy_recipe
    r.cooking_time = 'not a number'

    assert_not r.save
    r.cooking_time = 15
    assert r.save
  end

  test 'cooking time should be > 0' do
    r = dummy_recipe
    r.cooking_time = 0

    assert_not r.save
    r.cooking_time = -25
    assert_not r.save
    r.cooking_time = 1
    assert r.save
  end

  test 'number of people should be a number' do
    r = dummy_recipe
    r.number_of_people = 'not a number'

    assert_not r.save
    r.number_of_people = 15
    assert r.save
  end

  test 'number of people should be > 0' do
    r = dummy_recipe
    r.number_of_people = 0

    assert_not r.save
    r.number_of_people = -25
    assert_not r.save
    r.number_of_people = 1
    assert r.save
  end

  test ':en difficulty should be `easy` | `normal` | `hard`' do
    r = dummy_recipe

    r.difficulty = 'easy'
    assert r.save
    r.difficulty = 'normal'
    assert r.save
    r.difficulty = 'hard'
    assert r.save
  end

  test ':en price should be `low` | `medium` | `high`' do
    r = dummy_recipe

    r.price = 'low'
    assert r.save
    r.price = 'medium'
    assert r.save
    r.price = 'high'
    assert r.save
  end

  test 'should not save a recipe without image' do
    r = dummy_recipe
    r.image = nil

    assert_not r.save
  end

  test '`blanquette` number of people should be 4' do
    r = recipes :blanquette

    assert_equal 4, r.number_of_people
  end

  test '`blanquette` ingredients should contain `salt` & `parsley`' do
    I18n.locale = :en
    r = recipes :blanquette
    salt_r = r.ingredients.filter { |i| i.name == 'Salt' }
    parsley_r = r.ingredients.filter { |i| i.name == 'Parsley' }

    assert salt_r
    assert parsley_r
    I18n.locale = I18n.default_locale
  end

  test '`tartiflette` english country should be `france`' do
    I18n.locale = :en
    r = recipes :tartiflette
    r_france = r.countries.filter { |c| c.name == 'France' }

    assert r_france
    I18n.locale = I18n.default_locale
  end

  test '`bolognese` kitchenware should contain `pan` & `whisk`' do
    I18n.locale = :en
    r = recipes :bolognese
    pan_r = r.kitchenwares.filter { |k| k.name == 'Pan' }
    whisk_r = r.kitchenwares.filter { |k| k.name == 'Whisk' }

    assert pan_r
    assert whisk_r
    I18n.locale = I18n.default_locale
  end

  test '`bolognese` should have 2 steps in its preparation' do
    r = recipes :bolognese

    assert_equal 2, r.recipes_preparations.count
  end

  test '`bolognese` first step should be to wash hands' do
    I18n.locale = :en
    r = recipes :bolognese
    step1 = r.recipes_preparations.filter { |s| s.step == 1 }.at(0)

    if assert step1
      assert_equal 'Wash your hands, you dirty PIG !', step1.detail
    end
    I18n.locale = I18n.default_locale
  end

  test '`bolognese` step 2 should contain `onion` & `tomato`' do
    I18n.locale = :en
    r = recipes :bolognese
    step2 = r.recipes_preparations.filter { |s| s.step == 2 }.at(0)

    assert step2
    assert_equal 2, step2.ingredients.count
    onion = step2.ingredients.filter { |i| i.name == 'Onion' }.at(0)
    tomato = step2.ingredients.filter { |i| i.name == 'Tomato' }.at(0)
    assert onion
    assert tomato
    assert_equal 'Onion', onion.name
    assert_equal 'Tomato', tomato.name
    I18n.locale = I18n.default_locale
  end

  test ':fr `tartiflette` name should be `Tartiflette`' do
    I18n.locale = :fr
    r = recipes :tartiflette

    assert_equal 'Tartiflette', r.name
    I18n.locale = I18n.default_locale
  end

  test '`blanquette` and `bolognese` fallthrough accessors' do
    blanquette = recipes :blanquette
    bolognese = recipes :bolognese

    assert_equal 'Blanquette', blanquette.name_en
    assert_equal 'Blanquette', blanquette.name_fr
    assert_equal 'Bolognese', bolognese.name_en
    assert_equal 'Bolognaise', bolognese.name_fr
  end

  test 'recipe fallthrough accessors' do
    r = dummy_recipe
    r.name_en = 'Mashed potatoes'
    r.name_fr = 'Purée de pommes de terre'

    if assert r.save
      assert_equal 'Purée de pommes de terre', r.name_fr
      assert_equal 'Mashed potatoes', r.name_en
    end
  end

end

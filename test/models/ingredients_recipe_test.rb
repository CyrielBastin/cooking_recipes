# frozen_string_literal: true

require 'test_helper'

class IngredientsRecipeTest < ActiveSupport::TestCase

  def dummy_ingredient
    I18n.locale = :en
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
    I18n.locale = :en
    i = dummy_ingredient
    i.comment = 'yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy' # 151 chars

    assert_not i.save
    i.comment = 'yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy' # 150 chars
    assert i.save
    I18n.locale = I18n.default_locale
  end

  test '`bolo_onion` belongs to recipe `bolognese`' do
    I18n.locale = :en
    i = ingredients_recipes :bolo_onion

    assert_equal 'Bolognese', i.recipe.name
    I18n.locale = I18n.default_locale
  end

  test '`bolo_parsley` quantity should be 15g' do
    I18n.locale = :en
    i = ingredients_recipes :bolo_parsley

    assert_equal 15, i.quantity
    assert_equal 'g', i.measure.name
    I18n.locale = I18n.default_locale
  end

  test '`bolo_parsley` french comment should be `haché`' do
    I18n.locale = :fr
    i = ingredients_recipes :bolo_parsley

    assert_equal 'haché', i.comment
    I18n.locale = I18n.default_locale
  end

  test '`bolo_onion` should not have any associated comments' do
    i = ingredients_recipes :bolo_onion

    assert_nil i.comment_en
    assert_nil i.comment_fr
  end

  test '`bolo_tomato` and `bolo_parsley` fallthrough accessors' do
    tomato = ingredients_recipes :bolo_tomato
    parsley = ingredients_recipes :bolo_parsley

    assert_equal 'fresh and washed', tomato.comment_en
    assert_equal 'fraîche et lavée', tomato.comment_fr
    assert_equal 'choped', parsley.comment_en
    assert_equal 'haché', parsley.comment_fr
  end

  test 'ingredients_recipe fallthrough accessors' do
    i = dummy_ingredient
    i.comment_en = 'English comment'
    i.comment_fr = 'Commentaire français'

    if assert i.save
      assert_equal 'Commentaire français', i.comment_fr
      assert_equal 'English comment', i.comment_en
    end
  end

end

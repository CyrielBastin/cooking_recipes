# frozen_string_literal: true

require 'test_helper'

class MeasureTest < ActiveSupport::TestCase

  def dummy_measure
    I18n.locale = :en
    Measure.new { |m| m.name = 'Tablespoon' }
  end

  test 'should not save measure without a name' do
    m = dummy_measure
    m.name = nil

    assert_not m.save
  end

  test 'measure name should be unique' do
    I18n.locale = :en
    m1 = dummy_measure
    m2 = Measure.new { |m| m.name = 'Tablespoon' }

    assert m1.save
    assert_not m2.save
    I18n.locale = I18n.default_locale
  end

  test 'quantity of `tomato` for `bolognese` should be 6' do
    I18n.locale = :en
    r = recipes :bolognese
    tomato = r.ingredients_recipes.filter { |ir| ir.ingredient.name == 'Tomato' }.at(0)

    assert_equal 6, tomato.quantity
    I18n.locale = I18n.default_locale
  end

  test 'measure of `tomato` for `bolognese` should be nil' do
    I18n.locale = :en
    r = recipes :bolognese
    tomato = r.ingredients_recipes.filter { |ir| ir.ingredient.name == 'Tomato' }.at(0)

    assert_nil tomato.measure.name
    I18n.locale = I18n.default_locale
  end

  test '`unit` should not have any name' do
    m = measures :unit

    assert_nil m.name_en
    assert_nil m.name_fr
  end

  test '`gram` and `teaspoon` fallthrough accessors' do
    gram = measures :gram
    teaspoon = measures :teaspoon

    assert_equal 'g', gram.name_en
    assert_equal 'g', gram.name_fr
    assert_equal 'teaspoon', teaspoon.name_en
    assert_equal 'cuillère à café', teaspoon.name_fr
  end

  test 'measure fallthrough accessors' do
    m = dummy_measure
    m.name_en = 'english measure'
    m.name_fr = 'mesure française'

    if assert m.save
      assert_equal 'mesure française', m.name_fr
      assert_equal 'english measure', m.name_en
    end
  end

end

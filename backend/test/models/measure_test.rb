# frozen_string_literal: true

require 'test_helper'

class MeasureTest < ActiveSupport::TestCase

  def dummy_measure
    Measure.new { |m| m.name = 'Tablespoon' }
  end

  test 'should not save measure without a name' do
    m = dummy_measure
    m.name = nil

    assert_not m.save
  end

  test 'measure name should be unique' do
    m1 = dummy_measure
    m2 = Measure.new { |m| m.name = 'Tablespoon' }

    assert m1.save
    assert_not m2.save
  end

  test 'quantity of `tomato` for `bolognese` is 6' do
    r = recipes :bolognese
    tomato = r.ingredients_recipes.filter { |ir| ir.ingredient.name == 'Tomato' }.at(0)

    assert_equal 6, tomato.quantity
  end

  test 'measure of `tomato` for `bolognese` is `nil`' do
    r = recipes :bolognese
    tomato = r.ingredients_recipes.filter { |ir| ir.ingredient.name == 'Tomato' }.at(0)

    assert_nil tomato.measure.name
  end

  test '`unit` should not have any name' do
    m = measures :unit

    assert_nil m.name
  end

end

require 'test_helper'

class MeasureTest < ActiveSupport::TestCase

  def get_measure
    Measure.new { |m| m.name = 'Tablespoon' }
  end

  test 'should not save measure without a name' do
    m = Measure.new

    assert_not m.save
  end

  test 'measure name should be unique' do
    m = get_measure
    m2 = Measure.new { |m_| m_.name = 'Tablespoon' }

    assert m.save
    assert_not m2.save
  end

  test 'quantity of `tomato` for `bolognese` should be 6' do
    r = recipes(:bolognese)
    tomato = r.ingredients_recipes.filter { |ir| ir.ingredient.name == 'Tomato' }

    assert_equal 6, tomato[0].quantity
  end

  test 'measure of `tomato` for `bolognese` should be ``' do
    r = recipes(:bolognese)
    tomato = r.ingredients_recipes.filter { |ir| ir.ingredient.name == 'Tomato' }

    assert_equal '', tomato[0].measure.name
  end

end

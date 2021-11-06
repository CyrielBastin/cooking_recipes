require 'test_helper'

class CategoryTest < ActiveSupport::TestCase

  def get_category
    Category.new { |c| c.name = 'Drink' }
  end

  test 'should not save a category without name' do
    c = get_category
    c.name = nil

    assert_not c.save
  end

  test 'category should have a unique name' do
    c = get_category
    c2 = Category.new { |c| c.name = 'Drink' }

    assert c.save
    assert_not c2.save
  end

  test '`sauce` should not have a parent' do
    c = categories(:sauce)

    assert_nil c.parent
  end

  test '`lamb` should have parent `meat`' do
    c = categories(:lamb)

    assert_equal 'Meat', c.parent.name
  end

  test '`lamb` should have grandparent `main_course`' do
    c = categories(:lamb)

    assert_equal 'Main_course', c.parent.parent.name
  end

  test '`main_course` should have 2 recipes' do
    c = categories(:main_course)

    assert_equal 2, c.recipes.count
  end

  test '`main_course` recipe should be `tartiflette`' do
    c = categories(:main_course)

    assert_equal 'Tartiflette', c.recipes[0].name
  end

  test '`meat` should not have any recipes' do
    c = categories(:meat)

    assert c.recipes.empty?
  end

end

require 'test_helper'
require_relative '../fixtures/categories'

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
    # c = get_category
    c = Category.new { |c_| c_.name = 'Drink' }
    c2 = Category.new { |c_| c_.name = 'Drink' }

    assert c.save
    assert_not c2.save
  end

  test '`sauce` should not have a parent' do
    c = Fixtures::Categories.sauce

    assert_nil c.parent
  end

  test '`meat` parent\'s name should be `Main course`' do
    c = Fixtures::Categories.meat

    assert_equal 'Main course', c.parent.name
  end

  test '`lamb` should have parent `meat`' do
    c = Fixtures::Categories.lamb

    assert_equal 'Meat', c.parent.name
  end

  test '`lamb` should have grandparent `main_course`' do
    c = Fixtures::Categories.lamb

    assert_equal 'Main_course', c.parent.parent.name
  end

  test '`main_course` should have 2 recipes' do
    c = Fixtures::Categories.main_course

    assert_equal 2, c.recipes.count
  end

  test '`main_course` should have name "Main course"' do
    c = Fixtures::Categories.main_course

    assert_equal 'Main course', c.name
  end

  test '`main_course` recipe should be `tartiflette`' do
    c = Fixtures::Categories.main_course

    assert_equal 'Tartiflette', c.recipes[0].name
  end

  test '`meat` should not have any recipe' do
    c = Fixtures::Categories.meat

    assert c.recipes.empty?
  end

end

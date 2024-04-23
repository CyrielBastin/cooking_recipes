# frozen_string_literal: true

require 'test_helper'

class CategoryTest < ActiveSupport::TestCase

  def dummy_category
    Category.new { |c| c.name = 'Drink' }
  end

  test 'should not save a category without name' do
    c = dummy_category
    c.name = nil

    assert_not c.save
  end

  test 'category should have a unique name' do
    c1 = dummy_category
    c2 = Category.new { |c| c.name = 'Drink' }

    assert c1.save
    assert_not c2.save
  end

  test 'category `sauce` should not have a parent' do
    c = categories :sauce

    assert_nil c.parent
  end

  test 'category `meat` parent\'s name should be `Main Course`' do
    c = categories :meat

    assert_equal 'Main Course', c.parent.name
  end

  test 'category `lamb` should have parent `meat`' do
    c = categories :lamb

    assert_equal 'Meat', c.parent.name
  end

  test 'category `lamb` should have grandparent `main_course`' do
    c = categories :lamb

    assert_equal 'Main Course', c.parent.parent.name
  end

  test 'category `main_course` should have 2 recipes' do
    c = categories :main_course

    assert_equal 2, c.recipes.count
  end

  test 'category `main_course` should have name: "Main Course"' do
    c = categories :main_course

    assert_equal 'Main Course', c.name
  end

  test 'category `main_course` should have recipe `Tartiflette`' do
    c = categories :main_course
    tartiflette = c.recipes.filter { |r| r.name == 'Tartiflette' }.at(0)

    assert_equal 'Tartiflette', tartiflette.name
  end

  test 'category `meat` should not have any recipe' do
    c = categories :meat

    assert c.recipes.empty?
  end

  test 'category `meat` should have name: `Meat`' do
    c = categories :meat

    assert_equal 'Meat', c.name
  end

end

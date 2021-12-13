# frozen_string_literal: true

require 'test_helper'

class CategoryTest < ActiveSupport::TestCase

  def dummy_category
    I18n.locale = :en
    Category.new { |c| c.name = 'Drink' }
  end

  test 'should not save a category without name' do
    c = dummy_category
    c.name = nil

    assert_not c.save
  end

  test 'category should have a unique name' do
    I18n.locale = :en
    c1 = dummy_category
    c2 = Category.new { |c| c.name = 'Drink' }

    assert c1.save
    assert_not c2.save
    I18n.locale = I18n.default_locale
  end

  test '`sauce` should not have a parent' do
    c = categories :sauce

    assert_nil c.parent
  end

  test '`meat` parent\'s name should be `Main course`' do
    I18n.locale = :en
    c = categories :meat

    assert_equal 'Main course', c.parent.name
    I18n.locale = I18n.default_locale
  end

  test '`lamb` should have parent `meat`' do
    I18n.locale = :en
    c = categories :lamb

    assert_equal 'Meat', c.parent.name
    I18n.locale = I18n.default_locale
  end

  test '`lamb` should have grandparent `main_course`' do
    I18n.locale = :en
    c = categories :lamb

    assert_equal 'Main course', c.parent.parent.name
    I18n.locale = I18n.default_locale
  end

  test '`main_course` should have 2 recipes' do
    c = categories :main_course

    assert_equal 2, c.recipes.count
  end

  test '`main_course` should have :en name "Main course"' do
    I18n.locale = :en
    c = categories :main_course

    assert_equal 'Main course', c.name
    I18n.locale = I18n.default_locale
  end

  test '`main_course` should have recipe `Tartiflette`' do
    I18n.locale = :en
    c = categories :main_course
    tartiflette = c.recipes.filter { |r| r.name == 'Tartiflette' }.at(0)

    assert_equal 'Tartiflette', tartiflette.name
    I18n.locale = I18n.default_locale
  end

  test '`meat` should not have any recipe' do
    c = categories :meat

    assert c.recipes.empty?
  end

  test '`meat` should have french name `Viande`' do
    I18n.locale = :fr
    c = categories :meat

    assert_equal 'Viande', c.name
    I18n.locale = I18n.default_locale
  end

  test '`sauce` and `main_course` fallthrough accessors' do
    c1 = categories :sauce
    c2 = categories :main_course

    assert_equal 'Sauce', c1.name_en
    assert_equal 'Sauce', c1.name_fr
    assert_equal 'Main course', c2.name_en
    assert_equal 'Plat principal', c2.name_fr
  end

  test 'category fallthrough accessors' do
    c = dummy_category
    c.name_en = 'English category'
    c.name_fr = 'Catégorie française'

    if assert c.save
      assert_equal 'Catégorie française', c.name_fr
      assert_equal 'English category', c.name_en
    end
  end

end

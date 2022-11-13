# frozen_string_literal: true

require 'test_helper'

class KitchenwareTest < ActiveSupport::TestCase

  def dummy_kitchenware
    I18n.locale = :en
    Kitchenware.new do |k|
      k.name = 'Ladle'
      k.image = 'kitchenwares/ladle.png'
    end
  end

  test 'should not save kitchenware without name' do
    k = dummy_kitchenware
    k.name = nil

    assert_not k.save
  end

  test 'kitchenware should have a unique name' do
    I18n.locale = :en
    k1 = dummy_kitchenware
    k2 = Kitchenware.new do |k|
      k.name = 'Ladle'
      k.image = '...'
    end

    assert k1.save
    assert_not k2.save
    I18n.locale = I18n.default_locale
  end

  test 'name should be <= 50 characters' do
    k = dummy_kitchenware
    k.name = 'yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy' # 51 chars

    assert_not k.save
    k.name = 'yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy' # 50 chars
    assert k.save
  end

  test '`pan` english name should be `Pan`' do
    I18n.locale = :en
    k = kitchenwares :pan

    assert_equal 'Pan', k.name
    I18n.locale = I18n.default_locale
  end

  test '`oven` image should be `kitchenwares/oven.png`' do
    k = kitchenwares :oven

    assert_equal 'kitchenwares/oven.png', k.image
  end

  test '`whisk` should not have an image' do
    k = kitchenwares :whisk

    assert_nil k.image
  end

  test '`whisk` french name should be `Fouet`' do
    I18n.locale = :fr
    k = kitchenwares :whisk

    assert_equal 'Fouet', k.name
    I18n.locale = I18n.default_locale
  end

  test '`oven` and `pan` fallthrough accessors' do
    oven = kitchenwares :oven
    pan = kitchenwares :pan

    assert_equal 'Oven', oven.name_en
    assert_equal 'Four', oven.name_fr
    assert_equal 'Pan', pan.name_en
    assert_equal 'Casserole', pan.name_fr
  end

  test 'kitchenware fallthrough accessors' do
    k = dummy_kitchenware
    k.name_en = 'Skillet'
    k.name_fr = 'Poële'

    if assert k.save
      assert_equal 'Poële', k.name_fr
      assert_equal 'Skillet', k.name_en
    end
  end

end

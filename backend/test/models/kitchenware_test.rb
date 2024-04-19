# frozen_string_literal: true

require 'test_helper'

class KitchenwareTest < ActiveSupport::TestCase

  def dummy_kitchenware
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
    k1 = dummy_kitchenware
    k2 = Kitchenware.new do |k|
      k.name = 'Ladle'
      k.image = '...'
    end

    assert k1.save
    assert_not k2.save
  end

  test 'name should be <= 50 characters' do
    k = dummy_kitchenware
    k.name = 'yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy' # 51 chars

    assert_not k.save
    k.name = 'yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy' # 50 chars
    assert k.save
  end

  test '`pan` name is: `Pan`' do
    k = kitchenwares :pan

    assert_equal 'Pan', k.name
  end

  test '`oven` image should be `kitchenwares/oven.png`' do
    k = kitchenwares :oven

    assert_equal 'kitchenwares/oven.png', k.image
  end

  test '`whisk` should not have an image' do
    k = kitchenwares :whisk

    assert_nil k.image
  end

  test '`whisk` name is `Whisk`' do
    k = kitchenwares :whisk

    assert_equal 'Whisk', k.name
  end

end

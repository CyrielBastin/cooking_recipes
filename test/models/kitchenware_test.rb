require 'test_helper'

class KitchenwareTest < ActiveSupport::TestCase

  def get_kitchenware
    Kitchenware.new do |k|
      k.name = 'Ladle'
      k.image = 'kitchenwares/ladle.png'
    end
  end

  test 'should not save kitchenware without name' do
    k = get_kitchenware
    k.name = nil

    assert_not k.save
  end

  test 'kitchenware should have a unique name' do
    k = get_kitchenware
    k2 = Kitchenware.new do |k|
      k.name = 'Ladle'
      k.image = '...'
    end

    assert k.save
    assert_not k2.save
  end

  test 'should not save kitchenware without image' do
    k = get_kitchenware
    k.image = nil

    assert_not k.save
  end

end

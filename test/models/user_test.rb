require "test_helper"

class UserTest < ActiveSupport::TestCase

  test 'should not save a user without an email' do
    u = User.new

    assert_not u.save
  end

  test 'should not save a user without a valid email' do
    u = User.new
    u.email = 'not a valid email'

    assert_not u.save
  end

  test 'should save fixture `grimm`' do
    assert users(:grimm).save
  end

end

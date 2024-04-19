require 'test_helper'

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

  test 'user email should be unique' do
    u1 = users(:grimm)
    u2 = User.new do |u|
      u.email = 'grimm@grimm.com'
      u.password = '123456'
      u.password_confirmation = '123456'
    end

    assert u1.save
    assert_not u2.save
  end

  test '`grimm` email should be `grimm@grimm.com`' do
    u = users(:grimm)

    assert_equal 'grimm@grimm.com', u.email
  end

end

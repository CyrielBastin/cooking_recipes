require "test_helper"
require_relative '../fixtures/users'

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

  test '`grimm` email should be `grimm@grimm.io`' do
    u = Fixtures::Users.grimm
    pp '----------------------------------------'
    pp u
    pp '----------------------------------------'

    assert_equal 'grimm@grimm.io', u.email
  end

end

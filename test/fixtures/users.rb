module Fixtures
  module Users

    def self.grimm
      u = User.find 1
    rescue ActiveRecord::RecordNotFound
      u = User.new do |u|
        u.id = 1
        u.email = 'grimm@grimm.io'
        u.password = '123456'
        u.password_confirmation = '123456'
      end
      u.save

      u
    end

  end
end

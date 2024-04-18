# frozen_string_literal: true

##
# Represents all the kitchenware needed for a given recipe
#
# == Fields
# name:  string
# image: string
class Kitchenware < ApplicationRecord

  has_and_belongs_to_many :recipes

  validates :name, presence: true, uniqueness: true, length: { maximum: 50 }

end

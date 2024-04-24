# frozen_string_literal: true

##
# Represents a country to group recipes together
# Recipes from Italy, France, ...
#
# == Fields
# name:  string
# image: string
class Country < ApplicationRecord

  has_many :recipes

  validates :name, presence: true, uniqueness: true, length: { maximum: 100 }
  # validates :image, presence: true

end

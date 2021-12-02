# frozen_string_literal: true

##
# Represents the several categories of food
# appetizers, entree, dessert, ...
#
# == Fields
# name:   string
# parent: ApplicationRecord::Category
class Category < ApplicationRecord

  has_many :recipes
  belongs_to :parent, class_name: 'Category', optional: true
  has_many :children, class_name: 'Category', foreign_key: 'parent_id'

  validates :name, presence: true, uniqueness: true, length: { maximum: 30 }

end

# frozen_string_literal: true
class Api::CategoriesController < ApplicationController

  def index
    @categories = Category.all

    render 'index', status: :ok
  end

  def create
    @category = Category.new(category_params)

    render('show', status: :created) if @category.save
  end

  def show
    @category = Category.find(params[:id])
  end

  def update
    @category = Category.find(params[:id])

    render('show', status: :ok) if @category.update(category_params)
  end

  def destroy
    head(:no_content) if Category.find(params[:id]).destroy
  end

  private

  def category_params
    params.require(:category).permit(:id, :name, :parent_id)
  end

end

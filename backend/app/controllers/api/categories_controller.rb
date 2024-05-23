# frozen_string_literal: true

class Api::CategoriesController < ApplicationController

  def index
    @categories = Category.all

    render 'index', status: :ok
  end

  def create
    @category = Category.new(category_params)

    if @category.save
      render 'show', status: :created
    else
      render json: @category.errors, status: :unprocessable_entity
    end
  end

  def show
    @category = Category.find(params[:id])
  end

  def update
    @category = Category.find(params[:id])

    if @category.update(category_params)
      render 'show', status: :ok
    else
      render json: @category.errors, status: :unprocessable_entity
    end
  end

  def destroy
    head(:no_content) if Category.find(params[:id]).destroy
  end

  private

  def category_params
    params.require(:category).permit(:id, :name, :parent_id)
  end

end

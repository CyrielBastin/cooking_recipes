# frozen_string_literal: true

class Api::RecipesController < ApplicationController

  def index
    @recipes = Recipe.all

    render 'index', status: :ok
  end

  def create
    @recipe = Recipe.new(recipe_params)

    render('show', status: :created) if @recipe.save
  end

  def show
    @recipe = Recipe.find(params[:id])
  end

  def update
    @recipe = Recipe.find(params[:id])

    render('show', status: :ok) if @recipe.update(recipe_params)
  end

  def destroy
    head(:no_content) if Recipe.find(params[:id]).destroy
  end

  private

  def recipe_params
    params.require(:recipe).permit(:id, :image, :name, :category_id, :user_id, :preparation_time,
                                   :cooking_time, :number_of_people, :difficulty, :price, :description)
  end

end

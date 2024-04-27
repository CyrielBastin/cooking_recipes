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
    set_kitchenwares

    render('show', status: :ok) if @recipe.update(recipe_params)
  end

  def destroy
    head(:no_content) if Recipe.find(params[:id]).destroy
  end

  private

  def recipe_params
    params.require(:recipe).permit(:id, :image, :name, :category_id, :country_id, :user_id, :preparation_time,
                                   :cooking_time, :number_of_people, :difficulty, :price, :description,
                                   :kitchenware_ids,
                                   ingredients_recipes_attributes: %i[id ingredient_id quantity measure_id comment _destroy],
                                   instructions_recipes_attributes: %i[id step comment _destroy])
  end

  def set_kitchenwares
    if params[:recipe][:kitchenware_ids]&.size&.positive?
      @recipe.kitchenware_ids = params[:recipe][:kitchenware_ids]
    end
  end

end

# frozen_string_literal: true

class Api::IngredientsController < ApplicationController

  def index
    @ingredients = Ingredient.all

    render 'index', status: :ok
  end

  def create
    @ingredient = Ingredient.new(ingredient_params)

    if @ingredient.save
      render 'show', status: :created
    else
      render json: @ingredient.errors, status: :unprocessable_entity
    end
  end

  def show
    @ingredient = Ingredient.find(params[:id])
  end

  def update
    @ingredient = Ingredient.find(params[:id])

    if @ingredient.update(ingredient_params)
      render 'show', status: :ok
    else
      render json: @ingredient.errors, status: :unprocessable_entity
    end
  end

  def destroy
    head(:no_content) if Ingredient.find(params[:id]).destroy
  end

  private

  def ingredient_params
    params.require(:ingredient).permit(:id, :name, :image)
  end

end

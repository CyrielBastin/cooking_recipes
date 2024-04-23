# frozen_string_literal: true

class Api::IngredientsController < ApplicationController

  def index
    @ingredients = Ingredient.all

    render 'index', status: :ok
  end

  def create
    @ingredient = Ingredient.new(ingredient_params)

    render('show', status: :created) if @ingredient.save
  end

  def show
    @ingredient = Ingredient.find(params[:id])
  end

  def update
    @ingredient = Ingredient.find(params[:id])

    render('show', status: :ok) if @ingredient.update(ingredient_params)
  end

  def destroy
    head(:no_content) if Ingredient.find(params[:id]).destroy
  end

  private

  def ingredient_params
    params.require(:ingredient).permit(:id, :name, :image)
  end

end

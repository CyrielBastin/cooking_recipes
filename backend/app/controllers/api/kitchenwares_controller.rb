# frozen_string_literal: true

class Api::KitchenwaresController < ApplicationController

  def index
    @kitchenwares = Kitchenware.all

    render 'index', status: :ok
  end

  def create
    @kitchenware = Kitchenware.new(kitchenware_params)

    if @kitchenware.save
      render 'show', status: :created
    else
      render json: @kitchenware.errors, status: :unprocessable_entity
    end
  end

  def show
    @kitchenware = Kitchenware.find(params[:id])
  end

  def update
    @kitchenware = Kitchenware.find(params[:id])

    if @kitchenware.update(kitchenware_params)
      render 'show', status: :ok
    else
      render json: @kitchenware.errors, status: :unprocessable_entity
    end
  end

  def destroy
    head(:no_content) if Kitchenware.find(params[:id]).destroy
  end

  private

  def kitchenware_params
    params.require(:kitchenware).permit(:id, :name, :image)
  end

end

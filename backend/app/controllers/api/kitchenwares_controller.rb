# frozen_string_literal: true

class Api::KitchenwaresController < ApplicationController

  def index
    @kitchenwares = Kitchenware.all

    render 'index', status: :ok
  end

  def create
    @kitchenware = Kitchenware.new(kitchenware_params)

    render('show', status: :created) if @kitchenware.save
  end

  def show
    @kitchenware = Kitchenware.find(params[:id])
  end

  def update
    @kitchenware = Kitchenware.find(params[:id])

    render('show', status: :ok) if @kitchenware.update(kitchenware_params)
  end

  def destroy
    head(:no_content) if Kitchenware.find(params[:id]).destroy
  end

  private

  def kitchenware_params
    params.require(:kitchenware).permit(:id, :name, :image)
  end

end

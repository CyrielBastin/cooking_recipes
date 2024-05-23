# frozen_string_literal: true

class Api::CountriesController < ApplicationController

  def index
    @countries = Country.all

    render 'index', status: :ok
  end

  def create
    @country = Country.new(country_params)

    if @country.save
      render 'show', status: :created
    else
      render json: @country.errors, status: :unprocessable_entity
    end
  end

  def show
    @country = Country.find(params[:id])
  end

  def update
    @country = Country.find(params[:id])

    if @country.update(country_params)
      render 'show', status: :ok
    else
      render json: @country.errors, status: :unprocessable_entity
    end
  end

  def destroy
    head(:no_content) if Country.find(params[:id]).destroy
  end

  private

  def country_params
    params.require(:country).permit(:id, :name, :image)
  end

end

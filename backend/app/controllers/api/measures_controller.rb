# frozen_string_literal: true

class Api::MeasuresController < ApplicationController

  def index
    @measures = Measure.all

    render 'index', status: :ok
  end

  def create
    @measure = Measure.new(measure_params)

    render('show', status: :created) if @measure.save
  end

  def show
    @measure = Measure.find(params[:id])
  end

  def update
    @measure = Measure.find(params[:id])

    render('show', status: :ok) if @measure.update(measure_params)
  end

  def destroy
    head(:no_content) if Measure.find(params[:id]).destroy
  end

  private

  def measure_params
    params.require(:measure).permit(:id, :name)
  end

end

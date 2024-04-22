class Api::MeasuresController < ApplicationController

  def index
    @measures = Measure.all
  end

  def new
    @measure = Measure.new
  end

  def create
    @measure = Measure.new(measure_params)
    if @measure.save
      flash[:success] = t 'flash.success', resource: Measure.model_name.human, action: t('flash.action.create')
      redirect_to admin_measures_path
    else
      render 'new'
    end
  end

  def show
    @measure = Measure.find(params[:id])
  end

  def edit
    @measure = Measure.find(params[:id])
  end

  def update
    @measure = Measure.find(params[:id])
    if @measure.update(measure_params)
      flash[:success] = t 'flash.success', resource: Measure.model_name.human, action: t('flash.action.update')
      redirect_to admin_measures_path
    else
      render 'edit'
    end
  end

  def destroy
    Measure.find(params[:id]).destroy
    flash[:success] = t 'flash.success', resource: Measure.model_name.human, action: t('flash.action.delete')
    redirect_to admin_measures_path
  end

  private

  def measure_params
    params.require(:measure).permit(:id, :name)
  end

end

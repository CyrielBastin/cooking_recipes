class Api::KitchenwaresController < ApplicationController

  def index
    @kitchenwares = Kitchenware.all
  end

  def new
    @kitchenware = Kitchenware.new
  end

  def create
    @kitchenware = Kitchenware.new(kitchenware_params)
    if @kitchenware.save
      flash[:success] = t 'flash.success', resource: Kitchenware.model_name.human, action: t('flash.action.create')
      redirect_to admin_kitchenwares_path
    else
      render 'new'
    end
  end

  def show
    @kitchenware = Kitchenware.find(params[:id])
  end

  def edit
    @kitchenware = Kitchenware.find(params[:id])
  end

  def update
    @kitchenware = Kitchenware.find(params[:id])
    if @kitchenware.update(kitchenware_params)
      flash[:success] = t 'flash.success', resource: Kitchenware.model_name.human, action: t('flash.action.update')
      redirect_to admin_kitchenwares_path
    else
      render 'edit'
    end
  end

  def destroy
    Kitchenware.find(params[:id]).destroy
    flash[:success] = t 'flash.success', resource: Kitchenware.model_name.human, action: t('flash.action.delete')
    redirect_to admin_kitchenwares_path
  end

  private

  def kitchenware_params
    params.require(:kitchenware).permit(:id, :name, :image)
  end

end

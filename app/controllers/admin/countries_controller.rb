class Admin::CountriesController < AdminController

  def index
    @countries = Country.all
  end

  def new
    @country = Country.new
  end

  def create
    @country = Country.new(country_params)
    if @country.save
      flash[:success] = t 'flash.success', resource: Country.model_name.human, action: t('flash.action.create')
      redirect_to admin_countries_path
    else
      render 'new'
    end
  end

  def show
    @country = Country.find(params[:id])
  end

  def edit
    @country = Country.find(params[:id])
  end

  def update
    @country = Country.find(params[:id])
    if @country.update(country_params)
      flash[:success] = t 'flash.success', resource: Country.model_name.human, action: t('flash.action.update')
      redirect_to admin_countries_path
    else
      render 'edit'
    end
  end

  def destroy
    Country.find(params[:id]).destroy
    flash[:success] = t 'flash.success', resource: Country.model_name.human, action: t('flash.action.delete')
    redirect_to admin_countries_path
  end

  private

  def country_params
    params.require(:country).permit(:id, :name, :image)
  end

end

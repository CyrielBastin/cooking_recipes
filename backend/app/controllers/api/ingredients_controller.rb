class Admin::IngredientsController < AdminController

  def index
    @ingredients = Ingredient.all
  end

  def new
    @ingredient = Ingredient.new
  end

  def create
    @ingredient = Ingredient.new(ingredient_params)
    if @ingredient.save
      flash[:success] = t 'flash.success', resource: Ingredient.model_name.human, action: t('flash.action.create')
      redirect_to admin_ingredients_path
    else
      render 'new'
    end
  end

  def show
    @ingredient = Ingredient.find(params[:id])
  end

  def edit
    @ingredient = Ingredient.find(params[:id])
  end

  def update
    @ingredient = Ingredient.find(params[:id])
    if @ingredient.update(ingredient_params)
      flash[:success] = t 'flash.success', resource: Ingredient.model_name.human, action: t('flash.action.update')
      redirect_to admin_ingredients_path
    else
      render 'edit'
    end
  end

  def destroy
    Ingredient.find(params[:id]).destroy
    flash[:success] = t 'flash.success', resource: Ingredient.model_name.human, action: t('flash.action.delete')
    redirect_to admin_ingredients_path
  end

  private

  def ingredient_params
    params.require(:ingredient).permit(:id, :name, :image)
  end

end

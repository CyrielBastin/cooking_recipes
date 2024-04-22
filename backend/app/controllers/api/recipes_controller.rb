class Admin::RecipesController < AdminController

  def index
    @recipes = Recipe.all
  end

  def new
    @recipe = Recipe.new
  end

  def create
    @recipe = Recipe.new(recipe_params)
    if @recipe.save
      flash[:success] = t 'flash.success', resource: Recipe.model_name.human, action: t('flash.action.create')
      redirect_to admin_recipes_path
    else
      render 'new'
    end
  end

  def show
    @recipe = Recipe.find(params[:id])
  end

  def edit
    @recipe = Recipe.find(params[:id])
  end

  def update
    @recipe = Recipe.find(params[:id])
    if @recipe.update(recipe_params)
      flash[:success] = t 'flash.success', resource: Recipe.model_name.human, action: t('flash.action.update')
      redirect_to admin_recipes_path
    else
      render 'edit'
    end
  end

  def destroy
    Recipe.find(params[:id]).destroy
    flash[:success] = t 'flash.success', resource: Recipe.model_name.human, action: t('flash.action.delete')
    redirect_to admin_recipes_path
  end

  private

  # @todo
  # add images for a recipe and ingredients for each step of the preparation
  # recipes_images and recipes_preparations_ingredients
  def recipe_params
    params.require(:recipe).permit(:id, :name, :category_id, :user_id, :preparation_time, :cooking_time,
                                   :number_of_people, :difficulty, :price, :image, :user_comment, :list_countries_ids,
                                   ingredients_recipes_attributes: %i[id ingredient_id quantity measure_id comment],
                                   recipes_preparations_attributes: %i[id step detail])
  end

end

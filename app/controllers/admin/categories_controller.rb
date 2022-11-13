class Admin::CategoriesController < AdminController

  def index
    @categories = Category.all
  end

  def new
    @category = Category.new
  end

  def create
    @category = Category.new(category_params)
    if @category.save
      flash[:success] = t 'flash.success', resource: Category.model_name.human, action: t('flash.action.create')
      redirect_to admin_categories_path
    else
      render 'new'
    end
  end

  def show
    @category = Category.find(params[:id])
  end

  def edit
    @category = Category.find(params[:id])
  end

  def update
    @category = Category.find(params[:id])
    if @category.update(category_params)
      flash[:success] = t 'flash.success', resource: Category.model_name.human, action: t('flash.action.update')
      redirect_to admin_categories_path
    else
      render 'edit'
    end
  end

  def destroy
    Category.find(params[:id]).destroy
    flash[:success] = t 'flash.success', resource: Category.model_name.human, action: t('flash.action.delete')
    redirect_to admin_categories_path
  end

  private

  def category_params
    params.require(:category).permit(:id, :name, :parent_id)
  end

end

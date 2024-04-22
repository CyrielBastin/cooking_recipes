class Admin::ArticlesController < AdminController

  def index
    @articles = Article.all.reverse
  end

  def new
    @article = Article.new
  end

  def create
    @article = Article.new(article_params)
    if @article.save
      flash[:success] = t 'flash.success', resource: Article.model_name.human, action: t('flash.action.create')
      redirect_to admin_articles_path
    else
      render 'new', status: :unprocessable_entity
    end
  end

  def show
    @article = Article.find(params[:id])
  end

  def edit
    @article = Article.find(params[:id])
  end

  def update
    @article = Article.find(params[:id])
    if @article.update(article_params)
      flash[:success] = t 'flash.success', resource: Article.model_name.human, action: t('flash.action.update')
      redirect_to admin_articles_path
    else
      render 'edit', status: :unprocessable_entity
    end
  end

  def destroy
    Article.find(params[:id]).destroy
    flash[:success] = t 'flash.success', resource: Article.model_name.human, action: t('flash.action.delete')
    redirect_to admin_articles_path
  end

  private

  def article_params
    params.require(:article).permit(:id, :title, :content, :image, :user_id)
  end

end

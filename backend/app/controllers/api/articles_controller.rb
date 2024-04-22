# frozen_string_literal: true
class Api::ArticlesController < ApplicationController

  def index
    @articles = Article.all.reverse

    render 'index', status: :ok
  end

  def create
    @article = Article.new(article_params)

    render('show', status: :created) if @article.save
  end

  def show
    @article = Article.find(params[:id])
  end

  def update
    @article = Article.find(params[:id])

    render('show', status: :ok) if @article.update(article_params)
  end

  def destroy
    # Article.find(params[:id]).destroy

    head(:no_content) if Article.find(params[:id]).destroy
  end

  private

  def article_params
    params.require(:article).permit(:id, :title, :content, :image, :user_id)
  end

end

# frozen_string_literal: true

class Api::ArticlesController < ApplicationController

  def index
    @articles = Article.all.reverse

    render 'index', status: :ok
  end

  def create
    @article = Article.new(article_params)

    if @article.save
      render 'show', status: :created
    else
      render json: @article.errors, status: :unprocessable_entity
    end
  end

  def show
    @article = Article.find(params[:id])
  end

  def update
    @article = Article.find(params[:id])

    if @article.update(article_params)
      render 'show', status: :ok
    else
      render json: @article.errors, status: :unprocessable_entity
    end
  end

  def destroy
    head(:no_content) if Article.find(params[:id]).destroy
  end

  private

  def article_params
    params.require(:article).permit(:id, :title, :content, :image, :user_id)
  end

end

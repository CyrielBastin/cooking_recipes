require "test_helper"

class Admin::ArticlesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @article = articles(:belgian_cuisine)
  end

  test 'should get index' do
    get admin_articles_url, locale: I18n.locale

    assert_response :success
  end

  test 'should get new' do
    get new_admin_article_url, locale: I18n.locale

    assert_response :success
  end

  test 'should create article _en' do
    assert_difference('Article.count') do
      post admin_articles_url, params:
        { locale: I18n.locale,
          article:
            { title: 'Test Article',
              content: 'Content for Test Article',
              image: '/articles/test_article.png',
              user_id: users(:grimm)[:id] } }
    end

    assert_equal 'Your Article was successfully created !', flash[:success]
    assert_redirected_to admin_articles_url, locale: I18n.locale
  end

  test 'should show article' do
    get admin_article_url @article, locale: I18n.locale

    assert_response :success
  end

  test 'should get edit' do
    get edit_admin_article_url @article, locale: I18n.locale

    assert_response :success
  end

  test 'should update article _en' do
    patch admin_article_url @article, params:
      { locale: I18n.locale,
        article:
          { title: 'New Title' } }

    assert_equal 'Your Article was successfully updated !', flash[:success]
    assert_redirected_to admin_articles_url, locale: I18n.locale
  end

  test 'should destroy article' do
    assert_difference('Article.count', -1) do
      delete admin_article_url @article, locale: I18n.locale
    end

    assert_equal 'Your Article was successfully deleted !', flash[:success]
    assert_redirected_to admin_articles_url, locale: I18n.locale
  end

end

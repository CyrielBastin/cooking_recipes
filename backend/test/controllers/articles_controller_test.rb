# frozen_string_literal: true

require "test_helper"

class ActivitiesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @article = articles(:belgian_cuisine)
  end

  test 'retrieves all articles' do
    get api_articles_url
    assert_response :success
  end

  test 'creates a new article' do
    assert_difference('Article.count') do
      post api_articles_url, params:
        { article:
            { image: 'article_3.png',
              title: 'My new Article',
              content: 'This is my new article. Please, read',
              user_id: users(:grimm)[:id] } }
    end

    assert_response :created

    json_response = ActiveSupport::JSON.decode @response.body
    assert_equal 'article_3.png', json_response['image']
    assert_equal 'My new Article', json_response['title']
    assert_equal 'This is my new article. Please, read', json_response['content']
    assert_equal 'grimm@grimm.com', json_response['user']['email']
  end

  test 'shows article `belgian_cuisine`' do
    get api_article_url(@article)
    assert_response :success

    json_response = ActiveSupport::JSON.decode @response.body
    assert_equal 'path/to/image.png', json_response['image']
    assert_equal 'Belgian Cuisine', json_response['title']
    assert_equal 'Try out belgian cuisine, it can be fabulous !', json_response['content']
    assert_equal 'grimm@grimm.com', json_response['user']['email']
  end

  test 'updates an article partially' do
    patch api_article_url(@article), params:
      { article:
          { title: 'Fixed title' } }

    assert_response :success

    json_response = ActiveSupport::JSON.decode @response.body
    assert_equal 'path/to/image.png', json_response['image']
    assert_equal 'Fixed title', json_response['title']
    assert_equal 'Try out belgian cuisine, it can be fabulous !', json_response['content']
    assert_equal 'grimm@grimm.com', json_response['user']['email']
  end

  test 'updates an article fully' do
    put api_article_url(@article), params:
      { article:
          { image: 'path/to/image.png',
            title: 'Fixed title',
            content: 'Whole new content',
            user_id: users(:grimm)[:id] } }

    assert_response :success

    json_response = ActiveSupport::JSON.decode @response.body
    assert_equal 'path/to/image.png', json_response['image']
    assert_equal 'Fixed title', json_response['title']
    assert_equal 'Whole new content', json_response['content']
    assert_equal 'grimm@grimm.com', json_response['user']['email']
  end

  test 'destroys an article' do
    assert_difference('Article.count', -1) do
      delete api_article_url(@article)
    end

    assert_response :no_content
  end

end

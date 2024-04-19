# frozen_string_literal: true

require 'test_helper'

class ArticleTest < ActiveSupport::TestCase

  def dummy_article
    Article.new do |a|
      a.title = 'New article'
      a.image = 'articles/1.png'
      a.content = 'This is a great content'
      a.user = users(:grimm)
    end
  end

  test 'should not save an article without title' do
    a = dummy_article
    a.title = nil

    assert_not a.save
  end

  test 'name should be <= 150 chars' do
    a = dummy_article
    a.title = 'yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy' # 151 chars

    assert_not a.save
    a.title = 'yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy' # 150 chars
    assert a.save
  end

  test 'should not save an article without image' do
    a = dummy_article
    a.image = nil

    assert_not a.save
  end

  test 'should not save an article without content' do
    a = dummy_article
    a.content = nil

    assert_not a.save
  end

  test 'should not save an article without author' do
    a = dummy_article
    a.user = nil

    assert_not a.save
  end

  test 'article `belgian_cuisine` should have title: `Belgian Cuisine`' do
    a = articles :belgian_cuisine

    assert_equal 'Belgian Cuisine', a.title
  end

  test 'article `belgian_cuisine` should have content: `Try out belgian cuisine, it can be fabulous !`' do
    a = articles :belgian_cuisine

    assert_equal 'Try out belgian cuisine, it can be fabulous !', a.content
  end

end

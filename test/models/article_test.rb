require 'test_helper'

class ArticleTest < ActiveSupport::TestCase

  def get_article
    Article.new do |a|
      a.title = 'New article'
      a.image = 'articles/1.png'
      a.content = 'This is a great content'
      a.user = users(:grimm)
    end
  end

  test 'should not save an article without title' do
    a = get_article
    a.title = nil

    assert_not a.save
  end

  test 'should not save an article without image' do
    a = get_article
    a.image = nil

    assert_not a.save
  end

  test 'should not save an article without content' do
    a = get_article
    a.content = nil

    assert_not a.save
  end

  test 'should not save an article without author' do
    a = get_article
    a.user = nil

    assert_not a.save
  end

  test 'article `belgian_cuisine` should have title = `Belgian_cuisine`' do
    a = articles(:belgian_cuisine)

    assert_equal 'Belgian_cuisine', a.title
  end

  test 'article `belgian_cuisine` should have content = `Try out belgian_cuisine, it can be fabulous !`' do
    a = articles(:belgian_cuisine)

    assert_equal 'Try out belgian_cuisine, it can be fabulous !', a.content
  end

end

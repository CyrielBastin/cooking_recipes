# frozen_string_literal: true

require 'test_helper'

class ArticleTest < ActiveSupport::TestCase

  def dummy_article
    I18n.locale = :en
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

  test 'article translations default should be :en' do
    assert_equal :en, I18n.default_locale
  end

  test 'article `belgian_cuisine` should have english title = `Belgian Cuisine`' do
    I18n.locale = :en
    a = articles :belgian_cuisine

    assert_equal 'Belgian Cuisine', a.title
    I18n.locale = I18n.default_locale
  end

  test 'article `belgian_cuisine` should have english content = `Try out belgian cuisine, it can be fabulous !`' do
    I18n.locale = :en
    a = articles :belgian_cuisine

    assert_equal 'Try out belgian cuisine, it can be fabulous !', a.content
    I18n.locale = I18n.default_locale
  end

  test 'locale :fr should be available' do
    assert I18n.locale_available?(:fr)
  end

  test 'article `belgian_cuisine` should have french title = `Cuisine Belge`' do
    I18n.locale = :fr
    a = articles :belgian_cuisine

    assert_equal 'Cuisine Belge', a.title
    I18n.locale = I18n.default_locale
  end

  test 'article `cheese_for_christmas` correct french content' do
    I18n.locale = :fr
    a = articles :cheese_for_christmas

    assert_equal 'Ici, vous trouverez notre sélection gourmaise de fromages à manger pour Noël', a.content
    I18n.locale = I18n.default_locale
  end

  test 'Mobility `fallthrough_accessors` for :en and :fr' do
    a = articles :cheese_for_christmas

    assert_equal 'Cheese for Christmas', a.title_en
    assert_equal 'Du fromage pour Noël', a.title_fr
  end

  test 'Mobility `fallthrough_accessors` for :en and :fr __2' do
    a = dummy_article
    a.title_en = 'English title'
    a.content_en = 'English content'
    a.title_fr = 'Titre francais'
    a.content_fr = 'Contenu francais'

    assert a.save
    assert_equal 'English title', a.title_en
    assert_equal 'Titre francais', a.title_fr
    assert_equal 'English content', a.content_en
    assert_equal 'Contenu francais', a.content_fr
  end

end

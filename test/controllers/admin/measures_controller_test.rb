require 'test_helper'
require_relative '../../../config/url'

class Admin::MeasuresControllerTest < ActionDispatch::IntegrationTest
  setup do
    default_url_options[:host] = Url::DEV_EN_URL
    @measure = measures :teaspoon
  end

  test 'should get index' do
    get admin_measures_url

    assert_response :success
  end

  test 'should get new' do
    get new_admin_measure_url

    assert_response :success
  end

  test 'should create measure _en' do
    assert_difference('Measure.count') do
      post admin_measures_url, params:
        { measure:
            { name: 'Test Measure' } }
    end

    assert_equal 'Your Measure was successfully created !', flash[:success]
    measure = Measure.last
    assert_equal 'Test Measure', measure.name
    assert_redirected_to admin_measures_url
  end

  test 'should show measure' do
    get admin_measure_url @measure

    assert_response :success
  end

  test 'should get edit' do
    get edit_admin_measure_url @measure

    assert_response :success
  end

  test 'should update measure _en' do
    patch admin_measure_url @measure, params:
      { measure:
          { name: 'New Name' } }

    assert_equal 'Your Measure was successfully updated !', flash[:success]
    measure = Measure.find @measure.id
    assert_equal 'New Name', measure.name
    assert_redirected_to admin_measures_url
  end

  test 'should destroy measure' do
    assert_difference('Measure.count', -1) do
      delete admin_measure_url @measure
    end

    assert_equal 'Your Measure was successfully deleted !', flash[:success]
    assert_redirected_to admin_measures_url
  end

end

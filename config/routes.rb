Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  root 'home#index'

  devise_for :users

  namespace 'admin' do
    root to: 'dashboards#index'
    resources :articles, :categories, :countries, :ingredients, :kitchenwares, :measures, :recipes
  end
end

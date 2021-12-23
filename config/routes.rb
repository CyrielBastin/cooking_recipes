Rails.application.routes.draw do

  root 'home#index'

  devise_for :users

  namespace 'admin' do
    resources :articles, :categories, :countries, :ingredients, :kitchenwares, :measures, :recipes
  end

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

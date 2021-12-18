Rails.application.routes.draw do

  get '/' => 'home#dummy'
  get '/:locale' => 'home#index', as: :root

  scope '/:locale' do
    devise_for :users

    namespace 'admin' do
      resources :articles, :categories, :countries, :ingredients, :kitchenwares, :measures, :recipes
    end
  end

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

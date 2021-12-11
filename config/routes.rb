Rails.application.routes.draw do

  get '/' => 'home#dummy'
  get '/:locale' => 'home#index', as: :root

  scope '/:locale' do
    devise_for :users
  end

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

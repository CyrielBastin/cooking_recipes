Rails.application.routes.draw do

  scope '/:locale' do
    devise_for :users
  end

  get '/:locale' => 'home#index', as: :root
  get '/' => 'home#dummy'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

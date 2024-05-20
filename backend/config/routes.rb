Rails.application.routes.draw do

  # devise_for must remain outside of namespace 'api'.
  # Or Devise always responds with "401: Unauthorized" when trying to login
  devise_for :users,
             path: 'api/',
             path_names: {
               sign_in: 'login',
               sign_out: 'logout',
               registration: 'signup'
             },
             controllers: {
               sessions: 'users/sessions',
               registrations: 'users/registrations'
             }
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get 'up' => 'rails/health#show', as: :rails_health_check

  # Defines the root path route ("/")
  root 'home#index'
  namespace 'api', defaults: { format: :json } do
    resources :articles, :categories, :countries, :ingredients, :kitchenwares, :measures, :recipes

    # This route will be used by the frontend to check user authentication and authorization
    get '/secret', to: 'secrets#secret_message'
  end
end

Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get "/hello", to: "application#hello_world"

  namespace :api do
    post '/signup', to: 'users#create'
    get '/me', to: 'users#show'
    get '/users', to: 'users#index'

    post '/login', to: 'sessions#create'
    delete '/logout', to: 'sessions#destroy'

    post '/books', to: 'books#create'
    get '/books', to: 'books#index'
    get '/books/:id', to: 'books#show'
    patch '/books/:id', to: 'books#update'
    delete '/books/:id', to: 'books#destroy'
  end

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end

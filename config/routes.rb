# For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
Rails.application.routes.draw do
  get 'pages/show'
  root to: 'pages#show'
  resource :short_token, only: [:create]
  resource :session, only: [:create, :destroy]
  resources :users
  resources :questions
end

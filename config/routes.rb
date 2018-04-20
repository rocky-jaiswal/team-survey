# For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
Rails.application.routes.draw do
  get 'pages/show'
  root to: 'pages#show'
  scope :api do
    resource  :short_token, only: [:create]
    resource  :session, only: [:create, :destroy]
    resources :users, only: [:create, :destroy, :update, :index]
    resource  :user_profile, only: [:show]
    resources :questions
    resources :surveys do
      resources :responses, only: [:create, :index]
    end
  end
end

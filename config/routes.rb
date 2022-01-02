Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'tasks/index'
      get 'tasks/show'
      post 'tasks/create'
      put '/update/:id', to: 'tasks#update'
      delete '/destroy/:id',  to: 'tasks#destroy'

    end
  end
  root 'pages#home'
  get '*path', to: 'pages#home'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

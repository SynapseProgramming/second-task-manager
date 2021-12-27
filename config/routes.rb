Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'tasks/index'
      get 'tasks/create'
      get 'tasks/show'
      get 'tasks/destroy'
    end
  end
  root 'pages#home'
  get 'pages/todo_items'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

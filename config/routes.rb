Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "home#index"


  get "tasks/", to: "task#index"
  get "tasks/:id", to: "task#show"
  post "tasks/create", to: "task#create"
  patch "tasks/edit/:id", to: "task#edit"
  delete "tasks/delete/:id", to: "task#delete"


end

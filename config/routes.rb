Rails.application.routes.draw do
  root 'templates#start'
  get 'templates/login', to: 'templates#login'
  get 'templates/register', to: 'templates#register'
  get 'templates/user', to: 'users#show'

  post 'register', to: 'auth#register'
  post 'login',    to: 'auth#login'

  get '*path', to: 'templates#start'
end

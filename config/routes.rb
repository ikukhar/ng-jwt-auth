Rails.application.routes.draw do
  root 'templates#start'
  get 'templates/sign_in', to: 'templates#sign_in'
  get 'templates/sign_up', to: 'templates#sign_up'
  get 'templates/user',    to: 'templates#user'

  post 'register', to: 'auth#register'
  post 'login',    to: 'auth#login'

  get '*path', to: 'templates#start'
end

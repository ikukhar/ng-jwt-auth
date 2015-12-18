Rails.application.routes.draw do
  root 'templates#start'
  get  'templates/sign_in', to: 'templates#sign_in'
  get  'templates/sign_up', to: 'templates#sign_up'
  get  'templates/user',    to: 'templates#user'

  post 'registrations', to: 'registrations#create'
  post 'sessions', to: 'sessions#create'

  get '*path', to: 'templates#start'
end

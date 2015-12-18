Rails.application.routes.draw do
  root 'templates#start'
  get  'templates/index', to: 'templates#index'
  get  'templates/sign_in', to: 'templates#sign_in'
  get  'templates/sign_up', to: 'templates#sign_up'

  post 'registrations', to: 'registrations#create'

  get '*path', to: 'templates#start'
end

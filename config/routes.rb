Rails.application.routes.draw do

  root 'pages#home'
  scope '/api' do
    mount_devise_token_auth_for 'User', at: '/auth'
    resources :events,  only: [:index]
    resources :venues,  only: [:show]


    post 'events/backdoor', to: 'events#backdoor'
  end

end

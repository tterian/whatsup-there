Rails.application.routes.draw do

  root 'pages#home'
  scope '/api' do
    mount_devise_token_auth_for 'User', at: '/auth'
    resources :avatars,  only: [:index]
    resources :tags,   only: [:index, :show]
    resources :markers,  only: [:index, :show, :create, :destroy]
    resources :favs,   only: [:index, :show, :update]
    resources :comments, only: [:index, :show, :create, :destroy]
  end

end

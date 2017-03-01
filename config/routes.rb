Rails.application.routes.draw do
  resources :contatos
  resources :acessos
  get 'acessos/index'
  #root 'relatorio#index'
  root 'contatos#index'
 
end

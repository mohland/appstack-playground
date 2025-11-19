Rails.application.routes.draw do
  root "playground#index"
  
  get "playground", to: "playground#index"
  get "playground/:component", to: "playground#show"
  
  # Health check endpoint
  get "up" => "rails/health#show", as: :rails_health_check
end

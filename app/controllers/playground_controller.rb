class PlaygroundController < ApplicationController
  layout :determine_layout
  
  def index
    # Component gallery - lists all available demos
    @components = %w[
      buttons
      forms
      tables
      cards
      modals
      navigation
      typography
    ]
  end
  
  def show
    render params[:component]
  rescue ActionView::MissingTemplate
    render plain: "Component not found: #{params[:component]}", status: :not_found
  end
  
  private
  
  def determine_layout
    params[:minimal] ? 'minimal' : 'application'
  end
end

Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
      resources :users, only: [:create, :show]

      resources :posts do
        resources :comments, shallow: true
      end

      resource :session, only: [:create, :destroy]


      votable_types = [:posts, :comments]

      votable_types.each do |type|
        post "#{type}/:#{type.to_s.singularize}_id/votes",
          to: "#{type}#create_vote"

        delete "#{type}/:#{type.to_s.singularize}_id/votes/:vote_id",
          to: "#{type}#remove_vote"
      end




    end # api end
end # routes end

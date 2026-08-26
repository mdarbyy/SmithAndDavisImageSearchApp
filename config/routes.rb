Rails.application.routes.draw do
  root "stock_numbers#new"

  get "/stock-numbers",
      to: "stock_numbers#index",
      as: :stock_numbers

  post "/upload",
       to: "stock_numbers#upload",
       as: :upload_stock_numbers
end
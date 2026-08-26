class StockNumbersController < ApplicationController

  def new
  end

  def index
    @PER_PAGE = 20
    @stock_numbers = Rails.cache.read("stock_numbers")
    
    return unless @stock_numbers.present?

    @page = params[:page].to_i
    @page = 1 if @page < 1
    @total_pages = (@stock_numbers.length.to_f / @PER_PAGE).ceil
    @page = @total_pages if @page > @total_pages
    start_index = (@page - 1) * @PER_PAGE
    @page_stock_numbers = @stock_numbers[start_index, @PER_PAGE] || []
  end

  def upload
    if params[:file].blank?
      redirect_to root_path, danger: "Please select an Excel file"
      return
    end

    @stock_numbers = StockNumberImporter.new(params[:file]).call

    Rails.cache.write(
      "stock_numbers",
      @stock_numbers
    )

    redirect_to stock_numbers_path
  rescue StandardError => e
    redirect_to root_path, danger: e.message
  end

end
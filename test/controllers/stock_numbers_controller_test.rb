require "test_helper"

class StockNumbersControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get stock_numbers_index_url
    assert_response :success
  end
end

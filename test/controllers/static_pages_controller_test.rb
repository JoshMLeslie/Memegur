require 'test_helper'

class StaticPagesControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get static_pages_create_url
    assert_response :success
  end

  test "should get destroy" do
    get static_pages_destroy_url
    assert_response :success
  end

end

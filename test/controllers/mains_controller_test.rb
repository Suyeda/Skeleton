require 'test_helper'

class MainsControllerTest < ActionController::TestCase
  test "should get Main_Island" do
    get :Main_Island
    assert_response :success
  end

end

require 'test_helper'

class ContatosControllerTest < ActionDispatch::IntegrationTest
  test "Contato em Branco" do
  		contato = Contato.new
  		assert_not contato.save
	end
end

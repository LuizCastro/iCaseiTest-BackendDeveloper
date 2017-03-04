require 'test_helper'

class AcessosControllerTest < ActionDispatch::IntegrationTest
  setup do
		Acesso.delete_all
		Acesso.create({ guid: "1234567890-1234567890-1234567890-1234567890", url: "http://localhost:3000/teste", dt_incl:"2017-03-03 23:00:00"})
	end
  #===============================
  #VALIDAÇÃO CAMPOS
  #===============================

  test "Em Branco" do
  		acesso = Acesso.new
  		assert acesso.valid?, acesso.errors.full_messages.inspect
  end
  test "Sem GUID" do
  		acesso = Acesso.new(guid:"",url:"http://localhost:3000/teste")
  		assert acesso.valid?, acesso.errors.full_messages.inspect
  end
  test "Sem URL" do
  		acesso = Acesso.new(guid:"1234567890-1234567890-1234567890-1234567890",url:"")
  		assert acesso.valid?, acesso.errors.full_messages.inspect
  end
  #===============================
  #API - INCLUSÃO DE ACESSO
  #===============================
  
  test "API - Em Branco"  do
  	post "/acessos.json",
  	params: { acesso: { guid: "",url:"" } }
	assert_response :success, @response.body
  end
  test "API - Sem GUID"  do
  	post "/acessos.json",
  	params: { acesso: { guid: "",url:"http://localhost:3000/teste" } }
	assert_response :success, @response.body
  end
  test "API - Sem URL"  do
  	post "/acessos.json",
  	params: { acesso: { guid: "1234567890-1234567890-1234567890-1234567890",url:"" } }
	assert_response :success, @response.body
  end
end

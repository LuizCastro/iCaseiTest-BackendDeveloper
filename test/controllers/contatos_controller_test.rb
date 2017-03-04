require 'test_helper'

class ContatosControllerTest < ActionDispatch::IntegrationTest
  setup do
		Contato.delete_all
		Contato.create({ nome: "teste5", email: "teste5@teste.com"})
	end

  #===============================
  #VALIDAÇÃO CAMPOS
  #===============================

  test "Em Branco" do
  		contato = Contato.new
  		assert contato.valid?, contato.errors.full_messages.inspect
  end
  test "Sem Nome" do
  		contato = Contato.new(nome:"",email:"luiz@teste.com")
  		assert contato.valid?, contato.errors.full_messages.inspect
  end
  test "Sem Email" do
  		contato = Contato.new(nome:"teste",email:"")
  		assert contato.valid?, contato.errors.full_messages.inspect
  end
  test "Email Inválido" do
  		contato = Contato.new(nome:"teste",email:"teste@teste.")
  		assert contato.valid?, contato.errors.full_messages.inspect
  end
  test "Inclusão de Contato Existente" do
  		contato = Contato.new(nome:"teste5",email:"teste5@teste.com")
  		if !contato.save
  			assert "Email ja cadastrado"	
  		else
  			assert "Contato Incluido com sucesso"
  		end
  end
  #===============================
  #API - INCLUSÃO DE CONTATO
  #===============================
  
  test "API - Em Branco"  do
  	post "/contatos.json",
  	params: { contato: { nome: "",email:"" } }
	assert_response :success, @response.body
  end
  test "API - Sem Nome"  do
  	post "/contatos.json",
  	params: { contato: { nome: "",email:"teste6@teste.com" } }
	assert_response :success, @response.body
  end
  test "API - Sem Email"  do
  	post "/contatos.json",
  	params: { contato: { nome: "teste",email:"" } }
	assert_response :success, @response.body
  end
  test "API - Email Inválido"  do
  	post "/contatos.json",
  	params: { contato: { nome: "teste",email:"teste@teste." } }
	assert_response :success, @response.body
  end
  test "API - Email Existente"  do
  	post "/contatos.json",
  	params: { contato: { nome: "teste",email:"teste5@teste.com" } }
	assert_response :success, @response.body
  end
end

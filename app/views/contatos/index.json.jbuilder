json.array!(@contato) do |contato|
  json.extract! contato, :nome, :email
  json.url contato_url(contato, format: :json)
end
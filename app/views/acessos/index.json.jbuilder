json.array!(@acesso) do |acesso|
  json.extract! acesso, :id, :guid, :url, :dt_incl
  json.url access_url(acesso, format: :json)
end


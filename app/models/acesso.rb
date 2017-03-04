class Acesso < ActiveRecord::Base
	validates :guid, presence:{ message:"Campo Obrigatorio"}
	validates :url, presence:{ message:"Campo Obrigatorio"}
end

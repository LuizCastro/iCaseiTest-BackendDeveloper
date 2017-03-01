class Contato < ActiveRecord::Base
	validates :email, presence:true, length:{maximum:100},:uniqueness => true
	validates :nome, presence:true, length:{maximum:500}
end

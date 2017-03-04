class Contato < ActiveRecord::Base
	class EmailValidator < ActiveModel::EachValidator
    	def validate_each(record, attribute, value)
    		unless value =~ /\b[A-Z0-9._%a-z\-]+@(?:[A-Z0-9a-z\-]+\.)+[A-Za-z]{2,4}\z/
      			record.errors[attribute] << (options[:message] || "inválido")
    		end
  		end
	end
	validates :nome, presence:{ message:"Campo Obrigatorio"}, length:{maximum:500}
	validates :email, email:true, presence:{ message:"Campo Obrigatorio"}, length:{maximum:100}, uniqueness: {
      # object = person object being validated
      # data = { model: "Person", attribute: "Username", value: <username> }
      message: ->(object, data) do
        "#{data[:value]} ja cadastrado!"
      end
    }
	
end

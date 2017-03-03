class CreateContatos < ActiveRecord::Migration[5.0]
  def up
    create_table :contatos do |t|
    	t.string "nome", :limit=>500,:null=> false 
    	t.string "email", :limit=>100,:null=> false
    	t.datetime "dt_incl", default:->{'CURRENT_TIMESTAMP'}
    	t.datetime "dt_edic"
        t.index ["email"], name: "email_UNIQUE", unique: true, using: :btree
    end
    def down
    	drop_table :contatos
    end
  end
end

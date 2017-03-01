class CreateAcessos < ActiveRecord::Migration[5.0]
  def up
    create_table :acessos do |t|
      	t.string "guid", :limit=>50,:null=> false 
    	t.string "url", :limit=>500,:null=> false 
    	t.datetime "dt_incl", default:->{'CURRENT_TIMESTAMP'}
    end
    def down
    	drop_table:acessos
    end
  end
end

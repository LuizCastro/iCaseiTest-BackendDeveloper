class AcessosController < ApplicationController
  protect_from_forgery :except => :create
  before_action :set_acesso, only: [:show]

  # GET /acessos
  # GET /acessos.json
  def index
    @acesso = Acesso.last(50).reverse
  end

  # GET /acessos/1
  # GET /acessos/1.json
  def show
  end

  # POST /acessos
  # POST /acessos.json
  def create
    @acesso = Acesso.new(acesso_params)
    respond_to do |format|
     if @acesso.save
        format.html { redirect_to @acesso, notice: 'Acesso criado com sucesso!' }
        format.json { render :show, status: :created, location: @acesso }
      else
        format.html { render :new }
        format.json { render json: @acesso.errors, status: :unprocessable_entity }
      end
    end
  end

  private

    # Never trust parameters from the scary internet, only allow the white list through.
    def acesso_params
      params.require(:acesso).permit(:guid, :url,:dt_incl)
    end

    def set_acesso
      @acesso = Acesso.find(params[:id])
    end
end

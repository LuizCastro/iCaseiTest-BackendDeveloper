/*!
 * Contato v1 
 * Criado em 28/02/2017 Luiz Castro.
*/
if (typeof jQuery === 'undefined') {
  throw new Error('icaseiAPIContato.js JavaScript requer jQuery')
}
var Contato = Contato || {};
Contato =  (function () {
	'use strict';
    var $a = {}, $b = {};
	$b.FNValidaForm = function (idForm){
		$(idForm).validate({
			rules:{
				nome:{required:true,minlength:2,maxlength:500}
			,	email:{required:true,email:true,minlength:2,maxlength:100}
			},
			messages:{
					nome:{
						required:"Nome Obrigatório"
					,	minlength:"Nome inferior a 2 caracteres"
					,	maxlength:"Nome superior a 500 caracteres"
					},
					email:{
						required:"Email Obrigatório"
					,	email:"Email inválido"
					,	minlength:"Email inferior a 2 caracteres"
					,	maxlength:"Email superior a 500 caracteres"
					}
			}
		});
	};
	
	$b.Eventos = function () {
        $b.FNValidaForm('#formcontato');
		$("#formcontato").submit(function(event) {
			if($(this).valid()) {
				var contato = { nome: $("#nome").val(), email: $("#email").val() };
				console.log(contato);
				$b.GravaContato(contato);
			}
			return false;
		});
    };
	
    $b.Msg =  function Msg(id, tipo, msg) {
        var classe = '';
        classe = 'alert alert-' + tipo;
        //tipos: success//info//warning//danger
        $(id).removeClass().addClass(classe);
        $(id).empty();
        $(id).html("<button type=\"button\" class=\"close\" data-dismiss=\"alert\">×</button>" + msg);
        $(id).show().fadeTo(5000, 500).slideUp(500, function () {
            $(id).slideUp(500);
        }).focus();
    };
	
	$b.GravaContato = function (contato){
		
		event.preventDefault();
		jQuery.ajax({
			type: "POST",
            url:  "http://localhost:3000/contatos.json",
			data: { contato }
		}).done(function() {
			$b.Msg('#Contatomsg','info',"Contato salvo com sucesso!");
		}).fail(function( jqXHR, textStatus ) {
			$b.Msg('#Contatomsg','danger',"Falha ao Salvar contato <br> Erro: " + textStatus);
		}).error(function (request, status, error) {
			var _msg = '';
			var _array = JSON.parse(request.responseText);
			$b.Msg('#Contatomsg','danger',"Erro ao Salvar contato <br> Erro: " + $b.JsonToString(_array) );
		});
	};
    $b.JsonToString = function (json){
		var _string = '';
		jQuery.each(json, function(index) {
			console.log (index);
			console.log (json[index]);
			_string+= index + " " + json[index];
		});
		return _string;

	};
	$b.Eventos();
	
	return $a;
})(jQuery);

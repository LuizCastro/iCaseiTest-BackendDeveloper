/*!
 * AcessoLog v1 
 * Criado em 28/02/2017 Luiz Castro.
*/
if (typeof jQuery === 'undefined') {
  throw new Error('icaseiAPIAcesso.js JavaScript requer jQuery')
}
var AcessoLog = AcessoLog || {};
AcessoLog = (function () {
   'use strict';
    var $a = {}, $b = {};
	$b.ChaveVisitante = 'APIAcessoLog';
	//==========================================
	//●	Identificador único do visitante (GUID) 
	//==========================================
	$b.NovoGUID = function() {
        var d = new Date().getTime();
		var uuid = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'.replace(/[x]/g, function(c) {
			var r = (d + Math.random()*16)%16 | 0;
			d = Math.floor(d/16);
			return (c=='x' ? r : (r&0x3|0x8)).toString(16);
		});
		return uuid;
	};
	
	//==========================================
	//●	Armazenamento em Cookie
	//==========================================
	$b.setCookie =  function(cname, cvalue, exdays) {
		var d = new Date();
		d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
		var expires = "expires="+d.toUTCString();
		document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
	};
	$b.getCookie = function (cname) {
		var name = cname + "=";
		var ca = document.cookie.split(';');
		for(var i = 0; i < ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == ' ') {
				c = c.substring(1);
			}
			if (c.indexOf(name) == 0) {
				return c.substring(name.length, c.length);
			}
		}
		return "";
	};
	$b.checkCookie = function (name) {
		var Cookie = $b.getCookie(name);
		if (Cookie != "") {
			return true;
		}
		return false;
	};
	$b.getIdVisitante = function (){
		if($b.checkCookie($b.ChaveVisitante)){
			return $b.getCookie($b.ChaveVisitante);
		}else{
			var GUID = $b.NovoGUID();
			$b.setCookie($b.ChaveVisitante,GUID,1);
			return GUID;
		}
	};
	$b.GetDateNowFormat = function () {
		var date = new Date();
        var hr = ("0" + date.getHours()).slice(-2);
        var min = ("0" + date.getMinutes()).slice(-2);
        var seg = ("0" + date.getSeconds()).slice(-2);
        var strTime = hr + ':' + min + ':' + seg;
        return  date.getFullYear()+"-"+("0" + (date.getMonth() + 1)).slice(-2)+"-" + ("0" + date.getDate()).slice(-2)+" " + strTime;
    };
	$b.GetAcessoLog = function() {
        var acesso = {
            guid: $b.getIdVisitante(),
			url: window.location.href,
            dt_incl: $b.GetDateNowFormat()
        };
		return acesso;
    };
	$a.GravaAcessoLog = function (){
		var acesso = $b.GetAcessoLog();
		jQuery.ajax({
			type: "POST",
            url:  "http://localhost:3000/acessos.json",
			data: { acesso }
		})
		.fail(function( jqXHR, textStatus ) {
			console.log("Falha na comunicação com Servidor AcessoLog Lib Erro: " + textStatus );
		});
	}
	return $a;
})(jQuery);
AcessoLog.GravaAcessoLog();

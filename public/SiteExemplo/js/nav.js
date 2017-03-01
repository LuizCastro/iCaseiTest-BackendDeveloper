
getParams();
IPVisitante();
function getParams() {
	var idx = document.URL.indexOf('?');
	if (idx != -1) {
		var tempParams = new Object();
		var pairs = document.URL.substring(idx+1,document.URL.length).split('&');
		for (var i=0; i<pairs.length; i++) {
			nameVal = pairs[i].split('=');
			tempParams[nameVal[0]] = nameVal[1];
		}
		if(tempParams['V']){
			$('#V').html(tempParams['V']);
			setCookie('V',tempParams['V'],1);
		}
	}
}
function IPVisitante(data){
	if(data){
		setCookie('IP',data.ip,100);
		$('#IP').html(data.ip);
		return;
	}else{
		$.ajax({
			url: 'https://api.ipify.org?format=jsonp&callback=IPVisitante',
			type: "POST",
			dataType: "jsonp",
		});
	}
}
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
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
}

function checkCookie(name) {
    var Cookie = getCookie(name);
    if (Cookie != "") {
        return true;
    }
	return false;
}

$('#IP').html(getCookie('IP'));
$('#V').html(getCookie('V'));
console.log("IP:" + getCookie('IP'));
console.log("V:" + getCookie('V'));


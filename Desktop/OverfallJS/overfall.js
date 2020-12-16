//Overfall utils v1.4.3
//Just some random trash
//a, b, c, ... is just a shortcuts
/*
* ExecAScriptByTemplate(script) - execute a [script] through img's onerror function
* SendAPostRequest(body, address, type) - send POST req to [address] with [body] of [type]
* Crazify(who, spreadx, spready) - making [who] crazy, by randomizing its position from (0%, 0%) to ([spreadx]%; [spready]%)
* But the shortcut c(who) - executing Crazify(who, spreadx, spready), but spread* is standard, see [standartCValue]
*/
var standardCValue = 100;
function a(a1){ExecAScriptByTemplate(a1)}
function ExecAScriptByTemplate(script){
	var templ = document.createElement("template");
	templ.innerHTML = '<noscript><p title="</noscript><img src=x onerror='+script+'>">';
	var divv = document.createElement("div");
	divv.innerHTML = templ.innerHTML;
}
function b(b1, b2, b3){SendAPostRequest(b1, b2, b3)}
function SendAPostRequest(body, address, type){
	var xhr = new XMLHttpRequest();
	xhr.open("POST", address, true);
	xhr.setRequestHeader('Content-Type', type);
	//xhr.onreadystatechange = ...;
	xhr.send(body);
}
function c(c){Crazify(c, 100, 100)}
function Crazify(who, spreadx, spready){
	who.style.position = "absolute";
	who.style.zIndex = "999999";
	who.onmouseover = function(){
		if(Math.random() < 0.5 ) who.style.right = Math.floor(Math.random() * spreadx + 1)+20 + "%";
		else who.style.left = Math.floor(Math.random() * spreadx + 1)+20 + "%";
		if(Math.random() < 0.5 ) who.style.top = Math.floor(Math.random() * spready + 1) + "%";
		else who.style.bottom = Math.floor(Math.random() * spreadx + 1)+20 + "%";
	}
}
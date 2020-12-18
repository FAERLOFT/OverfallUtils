//Overfall utils v1.5.2
//Just some random trash
//a, b, c, ... is just a shortcuts
/*
* ExecAScriptByTemplate(script) - execute a [script] through img's onerror function
* SendAPostRequest(body, address, type) - send POST req to [address] with [body] of [type]
* Crazify(who, spreadx, spready) - making [who] crazy, by randomizing its position from (0%, 0%) to ([spreadx]%; [spready]%)
* But the shortcut c(who) - executing Crazify(who, spreadx, spready), but spread* is standard, see [standartCValue]
* cbyid(id) -  - executing Crazify(who, spreadx, spready), but spread* is standard and requires only the node id
* Thanosify(who, type) - On mouse over happens: [type=css] [who] loses its css, [type=inv] makes [who] invisible, [type=del] deletes [who]  
*/
var standardCValue = 200;
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
	xhr.send(body);
}
function c(c){Crazify(c, standardCValue, standardCValue)}
function cbyid(id){Crazify(document.getElementById(id), standardCValue, standardCValue)}
function Crazify(who, spreadx, spready){
	var parent = who.parentElement;
	var clone = who.cloneNode(true);
	clone.style.visibility = "invisible";
	parent.appendChild(clone);
	who.style.position = "absolute";
	who.style.zIndex = "999999";
	who.onmouseover = function(){
		if(Math.random() < 0.5 ) who.style.right = Math.floor(Math.random() * spreadx + 1) + "px";
		else who.style.left = Math.floor(Math.random() * spreadx + 1) + "px";
		if(Math.random() < 0.5 ) who.style.top = Math.floor(Math.random() * spready + 1) + "px";
		else who.style.bottom = Math.floor(Math.random() * spreadx + 1) + "px";
	}
}
function d(d){Thanosify(d, "inv")}
function ThanosifyAllOf(who, type, ignoreChildren){
	var i = 0;
	var d = document.getElementsByTagName(who);
	while (i < d.length) {
		if ((who.innerText == null) || (who.innerHTML == null) || ignoreChildren) {
 			Thanosify(d[i], type);
 			alert(who +" "+(who.innerHTML == null));
		}
		i++;
	}
}
function Thanosify(who, type){
	switch(type){
		case "css":
			who.onmouseover = function(){
				who.removeAttribute("class");
			}
			break;
		case "inv":
			who.onmouseover = function(){
				who.style.visibility = "hidden";
			}
			break;
		case "del":
			who.onmouseover = function(){
				who.style.display = "none";
			}
			break;
	}
}
var http = window.location.href, position = http.indexOf(".m.wikipedia");

if(position < 0) {
	position = http.indexOf(".wikipedia");
	http = http.substring(0, position)+".m"+http.substring(position, http.length);
	window.location.href = http;
}
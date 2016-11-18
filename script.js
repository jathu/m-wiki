var url = window.location.href;

if(url.indexOf(".m.wikipedia") < 0)
	window.location.href = url.replace(".wikipedia", "m.wikipedia");
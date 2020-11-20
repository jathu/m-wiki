const url = window.location.href;

if (!url.includes(".m.wikipedia")) {
	window.location.href = url.replace(".wikipedia", ".m.wikipedia");
}

var home = $("#home");
var prj = $("#prj");
var about = $("#about");
var hf = $(".header-fondo");
var me = $(".img-yo");

home.click(() => {
	hf.css({
		"background-image":" url('/images/fondo.jpeg')",
	})
	hf.addClass("animati")
	me.delay(800).removeClass("disable")
});


prj.click(() => {
	hf.css({
		"background-image":" url('/images/projects.jpeg')",
	})
	hf.addClass("animati")
	me.addClass("disable")
});

about.click(() => {
	hf.css({
		"background-image":" url('/images/about.jpeg')",
	})
	hf.addClass("animati")
	me.addClass("disable")
});

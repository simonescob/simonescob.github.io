var home = $("#home");
var prj = $("#prj");
var about = $("#about");
var hf = $(".header-fondo");
var me = $(".img-yo");

home.click(() => {
	hf.css({
		"background-image":" url('/new-portfolio1/images/fondo.jpeg')",
	})
	hf.addClass("animati")
	me.delay(800).removeClass("disable")
});


prj.click(() => {
	hf.css({
		"background-image":" url('/new-portfolio1/images/projects.jpeg')",
	})
	hf.addClass("animati")
	me.addClass("disable")
});

about.click(() => {
	hf.css({
		"background-image":" url('/new-portfolio1/images/about.jpeg')",
	})
	hf.addClass("animati")
	me.addClass("disable")
});

var home = $("#home");
var prj = $("#prj");
var about = $("#about");
var hf = $(".header-fondo");
var me = $(".img-yo");
var list = $(".list-projects");

home.click(() => {
	hf.css({
		"background-image":" url('../images/fondo.jpeg')",
	})
	hf.addClass("animati")
	me.removeClass("disable")
	me.addClass("animati")
	list.addClass("disable")
});


prj.click(() => {
	hf.css({
		"background-image":" url('../images/projects.jpeg')",
	})
	list.removeClass("disable")
	hf.addClass("animati")
	me.addClass("disable")
});

about.click(() => {
	hf.css({
		"background-image":" url('../images/about.jpeg')",
	})
	list.addClass("disable")
	hf.addClass("animati")
	me.addClass("disable")
});
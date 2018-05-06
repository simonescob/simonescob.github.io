var home = $("#home");
var prj = $("#prj");
var about = $("#about");
var hf = $(".header-fondo");
var me = $(".img-yo");
var list = $(".list-projects");
var contact = $(".contact");

home.click(() => {
	hf.css({
		"background-image":" url(images/home.jpeg)",
	})
	me.removeClass("disable")
	list.addClass("disable")
	contact.addClass("disable")
	
	hf.addClass("animati")
	me.addClass("animati")
});


prj.click(() => {
	hf.css({
		"background-image":" url(images/projects.jpeg)",
	})
	list.removeClass("disable")
	contact.addClass("disable")
	me.addClass("disable")
	
	hf.addClass("animati")
});

about.click(() => {
	hf.css({
		"background-image":" url(images/about.jpeg)",
	})
	contact.removeClass("disable")
	list.addClass("disable")
	me.addClass("disable")
	
	hf.addClass("animati")
});

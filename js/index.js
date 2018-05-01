<<<<<<< HEAD
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
=======
var home=$("#home");var prj=$("#prj");var about=$("#about");var hf=$(".header-fondo");var me=$(".img-yo");home.click(()=>{hf.css({"background-image":" url('/new-portfolio1/images/fondo.jpeg')",})
hf.addClass("animati")
me.delay(800).removeClass("disable")});prj.click(()=>{hf.css({"background-image":" url('/new-portfolio1/images/projects.jpeg')",})
hf.addClass("animati")
me.addClass("disable")});about.click(()=>{hf.css({"background-image":" url('/new-portfolio1/images/about.jpeg')",})
hf.addClass("animati")
me.addClass("disable")})
>>>>>>> cc177fad2d3c3aa630c608d8cbd461ce812ad640

// Pertemuan 24 Oktober 2022
// JavaScrip Menu
var tombolMenu =$(".tombol-menu");
var menu = $("nav .menu ul");

function klikMenu() {
	tombolMenu.clik(function() {
		menu.toggle();
	});
	menu.clik(function() {
		menu.toggle();
	});
}

$(document).ready(function() {
	var width = $(window).width();
	if (width <990) {
		klikMenu();
	}
})

// Check Lebar
$(window).resize(function () {
	var width = $(window).width();
	if (width > 989) {
		menu.css("display", "block");
	} else {
		menu.css("display", "none");
	}
	klikMenu();
});
// Closed Pertemuan 24 Oktober 2022


// Efek Scroll
$(document).ready(function() {
	var scroll_pos = 0;
	$(document).scroll(function() {
	var scroll_pos = $(this).scrollTop();
	if (scroll_pos > 0) {
		$("nav").addClass("putih");
		$("nav img.hitam").show();
		$("nav img.putih").hide();
	} else {
		$("nav").removeClass("putih")
		$("nav img.hitam").hide();
		$("nav img.putih").hide();
	   }
	})
});
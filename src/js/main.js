$(document).ready(function() {
	//Declare normal variable javascript
	//Hide element when smaller than 1025
	if ($(window).width() < 1025) {
		$(".bottom-header").fadeIn(function() {
			$(".bottom-header").css({
				display: "flex"
			});
		});
	}

	//Library init
	$(".lightgallery").lightGallery();
	//Declare function Javascript
	tabActive();
	mobileToggle();
	mappingNavigation();
	mappingContact();
	mappingSearch();
	mapppingLanguage();
	mappingLink();
	swiperInit();
	toggleMegaMenuMobile();
	if ($(window).width() > 1024) {
		const $menu = $(".searchbox");
		$(document).mouseup(e => {
			if (
				!$menu.is(e.target) && // if the target of the click isn't the container...
				$menu.has(e.target).length === 0
			) {
				// ... nor a descendant of the container
				$menu.removeClass("active");
			}
		});
	}
});

//Check if windows size large then 1024 then these function will be execute

if ($(window).width() > 1024) {
}
// Remove when click outside the circle

function tabActive() {
	$(".tab-list-navigation li a").on("click", function() {
		$(this)
			.parents(".tab-list-navigation")
			.find("li")
			.removeClass("active");
		$(this)
			.parents("li")
			.addClass("active");

		var display = $(this).attr("data-type");
		$(".tab-item").removeClass("active");
		$("#" + display).addClass("active");
	});
}

//Mobile Toggle

function mobileToggle() {
	$("header .mobile-toggle em").on("click", function() {
		$(".mobile-wrapper").toggleClass("active");
	});
}
function toggleMegaMenuMobile() {
	let parentNav = $(".navigation-wrapper ul li.has-mega em");
	parentNav.on("click", function() {
		$(this)
			.next()
			.parent()
			.toggleClass("active");
	});
	let exitMega = $(".navigation-wrapper ul li.has-mega .mega-wrapper em");
	exitMega.on("click", function() {
		$(this)
			.next()
			.parents(".has-mega")
			.removeClass("active");
	});
}
fucntio;
//Swiper init

function swiperInit() {
	var homeBannerSwiperTop = new Swiper(".home-banner-top .swiper-container", {
		// Optional parameters
		speed: 1250,
		effect: "fade",
		fadeEffect: {
			crossFade: true
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true
		},
		navigation: {
			nextEl: ".navigation-banner-next",
			prevEl: ".navigation-banner-prev"
		}
	});
}
// Mapping mobile

function mappingNavigation() {
	return new MappingListener({
		selector: ".navigation-wrapper",
		mobileWrapper: ".mobile-wrapper",
		mobileMethod: "appendTo",
		desktopWrapper: ".header-wrapper-bottom",
		desktopMethod: "prependTo",
		breakpoint: 1025
	}).watch();
}

function mappingSearch() {
	return new MappingListener({
		selector: ".search-wrapper",
		mobileWrapper: ".mobile-wrapper",
		mobileMethod: "appendTo",
		desktopWrapper: ".header-wrapper-top",
		desktopMethod: "prependTo",
		breakpoint: 1025
	}).watch();
}

function mappingContact() {
	return new MappingListener({
		selector: ".contact-wrapper",
		mobileWrapper: ".mobile-wrapper",
		mobileMethod: "appendTo",
		desktopWrapper: ".header-wrapper-top",
		desktopMethod: "prependTo",
		breakpoint: 1025
	}).watch();
}

function mapppingLanguage() {
	return new MappingListener({
		selector: ".language-wrapper",
		mobileWrapper: ".header-wrapper-top",
		mobileMethod: "appendTo",
		desktopWrapper: ".header-wrapper-bottom",
		desktopMethod: "appendTo",
		breakpoint: 1025
	}).watch();
}

function mappingLink() {
	return new MappingListener({
		selector: ".group-link-wrapper",
		mobileWrapper: ".mobile-wrapper",
		mobileMethod: "appendTo",
		desktopWrapper: ".header-wrapper-bottom",
		desktopMethod: "appendTo",
		breakpoint: 1025
	}).watch();
}

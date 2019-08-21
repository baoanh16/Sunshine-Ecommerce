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
	$(".product-filter-side-wrapper .mobile-filter").on("click", function() {
		$(this)
			.parents(".product-filter-side-wrapper")
			.removeClass("active");
	});
	$(".product-filter-side .title").on("click", function() {
		$(this)
			.parent(".product-filter-side")
			.find(".product-filter-side-wrapper")
			.addClass("active");
	});

	//Declare function Javascript
	productCategoryDashboard();
	tabActive();
	mobileToggle();
	mappingNavigation();
	mappingContact();
	mappingSearch();
	mapppingLanguage();
	mappingLink();
	swiperInit();
	toggleMegaMenuMobile();
	faqDashboard();

	var temp = location.pathname.split("/").slice(-1)[0];
	let url = "./" + temp;
	jQuery(".navigation-wrapper a").each(function() {
		if ($(this).attr("href") == url)
			$(this)
				.parent()
				.addClass("active");
	});
	// activeAfterLoad();
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

function productCategoryDashboard() {
	let li = $(".product-by-category-wrapper ul  li");
	let title = $(".product-by-category-wrapper ul  li .title-caption");
	let content = $(".product-by-category-wrapper ul li .product-wrapper");
	var body = $("html, body");
	title.click(function() {
		// content.slideToggle("slow", function() {
		// 	if (content.is(":visible")) {
		// 		$("html, body").animate({ scrollTop: content.offset().top });
		// 	}
		// });

		if (
			!$(this)
				.parent()
				.hasClass("active")
		) {
			$(".product-by-category-wrapper ul li .product-wrapper").slideUp();
			$(this)
				.next()
				.slideDown("slow", function() {
					$("html, body").animate({
						scrollTop: $(this).offset().top - 100
					});
				});

			li.removeClass("active");
			$(this)
				.parent()
				.addClass("active");
		} else {
			$(this)
				.next()
				.slideToggle();
			li.removeClass("active");
		}
	});
}

function faqDashboard() {
	$(".faq-dashboard > li > .title").click(function(e) {
		e.preventDefault();
		if (
			!$(this)
				.parent()
				.hasClass("active")
		) {
			$(".faq-dashboard li .content").slideUp();
			$(this)
				.next()
				.slideToggle();
			$(".faq-dashboard li").removeClass("active");
			$(this)
				.parent()
				.addClass("active");
		} else {
			$(this)
				.next()
				.slideToggle();
			$(".faq-dashboard li").removeClass("active");
		}
	});
}

function tabActive() {
	$(".tab-navigation-wrapper li a").on("click", function() {
		$(this)
			.parents(".tab-navigation-wrapper")
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
	var partnerSwiper = new Swiper(
		".partnet-swiper-wrapper .swiper-container",
		{
			// Optional parameters
			loop: true,
			autoplay: {
				delay: 2500
			},
			breakpointsInverse: true,
			breakpoints: {
				// when window width is >= 320px
				320: {
					slidesPerView: 2,
					spaceBetween: 20
				},
				576: {
					slidesPerView: 3,
					spaceBetween: 20
				},
				768: {
					slidesPerView: 4,
					spaceBetween: 20
				},
				// when window width is >= 480px
				1025: {
					slidesPerView: 5
				},
				// when window width is >= 640px
				1441: {
					slidesPerView: 6,
					spaceBetween: 20
				}
			},
			speed: 1250,
			navigation: {
				nextEl: ".navigation-partner-next",
				prevEl: ".navigation-partner-prev"
			}
		}
	);
	var productBrandSwiper = new Swiper(".product-brands .swiper-container", {
		// Optional parameters
		speed: 1250,
		breakpointsInverse: true,
		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 2
			},
			576: {
				slidesPerView: 3
			},
			768: {
				slidesPerView: 4
			},
			// when window width is >= 480px
			1025: {
				slidesPerView: 5
			},
			// when window width is >= 640px
			1441: {
				slidesPerView: 8
			}
		}
	});
	var galleryThumbs = new Swiper(".swiper-product-thumb .swiper-container", {
		spaceBetween: 20,
		freeMode: true,
		watchSlidesVisibility: true,
		slidesPerView: "4",
		watchSlidesVisibility: true,
		watchSlidesProgress: true
	});
	var galleryTop = new Swiper(".swiper-product-top .swiper-container", {
		effect: "fade",
		fadeEffect: {
			crossFade: true
		},
		thumbs: {
			swiper: galleryThumbs
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

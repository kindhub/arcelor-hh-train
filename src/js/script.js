import VSwiper from "./modules/VSwiper";
import Video from "./modules/Video";
import Content from "./modules/Content";
import VacancyBtn from "./modules/VacancyBtn";
import Nav from "./modules/Nav";
import citySelector from './custom_modules/CitySelector';
import Countup from './custom_modules/Countup';

/*
	--------------------------------------------
	--------------------------------------------
					SLIDERS
	--------------------------------------------
	--------------------------------------------
 */

	function initGallerySlider() {
		swiper.init(".tmpl-hh__gallery-slider", {
			loop: true,
			slidesPerView: 1,
			centeredSlides: true,
			autoHeight: true,
			navigation: {
				prevEl: ".tmpl-hh__gallery-slider-arrow-prev",
				nextEl: ".tmpl-hh__gallery-slider-arrow-next",
			},
		});
	}

	function initTemirtauSlider() {
		swiper.init(".tmpl-hh__temirtau-slider", {
			loop: true,
			slidesPerView: 1,
			centeredSlides: true,
			autoHeight: true,
			navigation: {
				prevEl: ".tmpl-hh__temirtau-slider-arrow-prev",
				nextEl: ".tmpl-hh__temirtau-slider-arrow-next",
			},
		});
	}

	function goToTop() {
		document.querySelector('.tmpl-hh__wrapper').scrollIntoView({
			behavior: "smooth"
		});
	};

	let compoundLink = document.getElementsByClassName('tmpl-hh__s-compound__link');
	for (let i = 0; i < compoundLink.length; i++) {
		compoundLink[i].addEventListener('click', goToTop)
	}

	let mapLink = document.getElementsByClassName('tmpl-hh__s-map__link');
	for (let i = 0; i < mapLink.length; i++) {
		mapLink[i].addEventListener('click', goToTop)
	}

	let dots = document.querySelectorAll(".tmpl-hh__dots");
	let moreText = document.querySelectorAll(".tmpl-hh__more");
	
	let btnText = document.querySelectorAll(".tmpl-hh__myBtn");

		for(let i = 0; i<dots.length; i++){
			btnText[i].addEventListener("click", ()=>{
				if (dots[i].style.display === "none") {
					dots[i].style.display = "inline";
					btnText[i].innerHTML = "Подробнее...";
					moreText[i].style.display = "none";
				} else {
					dots[i].style.display = "none";
					btnText[i].innerHTML = "Свернуть";
					moreText[i].style.display = "inline";
				}
			});
		}

	function isScrolledIntoView(elem) {
		let body = document.body,
			html = document.documentElement,
			docViewTop = window.pageYOffset,
			docViewBottom = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight),
			elemTop = elem.getBoundingClientRect().top + docViewTop + 300,
			elemBottom = elemTop + elem.offsetHeight;
	
		return elemBottom <= docViewBottom && elemTop >= docViewTop;
	}

	function counterScroll() {
		if (isScrolledIntoView(document.querySelector(".tmpl-hh__s-stats")) && !isAboutCountersBlockViewed) {
			isAboutCountersBlockViewed = true;
			setTimeout(function (){
				new Countup(".tmpl-hh__s-stats");
			}, 200);
		}
	}

	let isAboutCountersBlockViewed = false;
	
	if(window.innerWidth < 529) {
		new Countup(".tmpl-hh__s-stats");
	} else {
		window.addEventListener('scroll', counterScroll);
	}
	

	
	
/*
	--------------------------------------------
	--------------------------------------------
						COMMON
	--------------------------------------------
	--------------------------------------------
 */

	const swiper = new VSwiper();
	new Video();
	new Content();
	new Nav();
	new VacancyBtn();
	initTemirtauSlider();
	initGallerySlider();
	citySelector.init();
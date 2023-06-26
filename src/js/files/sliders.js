/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Pagination, Parallax, Autoplay, Thumbs } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Добавление классов слайдерам
// swiper главному блоку, swiper-wrapper оболочке, swiper-slide для слайдов
function bildSliders() {
	//BildSlider
	let sliders = document.querySelectorAll('[class*="__swiper"]:not(.swiper-wrapper)');
	if (sliders) {
		sliders.forEach(slider => {
			slider.parentElement.classList.add('swiper');
			slider.classList.add('swiper-wrapper');
			for (const slide of slider.children) {
				slide.classList.add('swiper-slide');
			}
		});
	}
}
// Инициализация слайдеров
function initSliders() {
	// Добавление классов слайдера
	// при необходимости отключить
	bildSliders();

	// Перечень слайдеров
	if (document.querySelector('.main-block__slider')) {
		new Swiper('.main-block__slider', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination, Parallax, Autoplay],
			//effect: 'fade',
			// autoplay: {
			// 	delay: 3000,
			// 	disableOnInteraction: false,
			// },
			observer: true,
			observeParents: true, 
			slidesPerView: 1,
			spaceBetween: 50,
			parallax: true,
			//autoHeight: true,
			speed: 800,
			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,
			// Dotts
			pagination: {
				el: '.controll-main-block__dotts',
				clickable: true,
			},
			/*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			on: {
				init: function (swiper) {
					const allSlides = document.querySelector('.fraction-controll__all');
					const allSlidesItems = document.querySelectorAll('.slide-main-block:not(.swiper-slide-duplicate)');
					allSlides.innerHTML = allSlidesItems.length < 10 ? `0${allSlidesItems.length}` : allSlidesItems.length;
				},
				slideChange: function (swiper) {
					const currentSlide = document.querySelector('.fraction-controll__current');
					currentSlide.innerHTML = swiper.realIndex + 1 < 10 ? `0${swiper.realIndex + 1}` : swiper.realIndex + 1;
				}
			}
		});
	}
	if (document.querySelector('.products-slider')) {
		new Swiper('.products-slider__slider', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination],
			//effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			observer: true,
			watchOverflow: true,
			observeParents: true,
			slidesPerView: 4,
			spaceBetween: 30,
			parallax: true,
			//autoHeight: true,
			speed: 800,
			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,
			// Dotts
			pagination: {
				el: '.products-slider__dotts',
				clickable: true,
				dynamicBullets: true
			},

			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 10,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1370: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			on: {
				init: function (swiper) {

				}
			}
		});
	}
	if (document.querySelector('.product-new')) {
		new Swiper('.product-new__slider', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination],
			//effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			observer: true,
			watchOverflow: true,
			observeParents: true,
			slidesPerView: 3,
			spaceBetween: 30,
			parallax: true,
			//autoHeight: true,
			speed: 800,
			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,
			// Dotts
			pagination: {
				el: '.product-new__dotts',
				clickable: true,
				dynamicBullets: true
			},

			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 10,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				1330: {
					slidesPerView: 3,
					spaceBetween: 30,
				},
			},
			on: {
				init: function (swiper) {

				}
			}
		});
	}

	if (document.querySelector('.thumbs-images')) {
		const thumbsSwiper = new Swiper('.thumbs-images', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination, Autoplay, Thumbs],
			//effect: 'fade',
			observer: true,
			watchOverflow: true,
			observeParents: true,
			slidesPerView: 4,
			spaceBetween: 16,
			parallax: true,
			//autoHeight: true,
			speed: 800,
			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,
			// Dotts
			pagination: {
				el: '.products-new__dotts',
				clickable: true,
				dynamicBullets: true
			},

			breakpoints: {
				992: {
					slidesPerView: 3,
				},
				1330: {
					slidesPerView: 4,
					spaceBetween: 16,
				},
			},
			on: {
				init: function (swiper) {

				}
			}
		});
		new Swiper('.images-product__slider', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination, Autoplay, Thumbs],
			//effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			thumbs: {
				swiper: thumbsSwiper
			},
			observer: true,
			watchOverflow: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 30,
			//autoHeight: true,
			speed: 800,
			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,
			on: {
				init: function (swiper) {

				}
			}
		});

	}
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	// Добавление классов слайдера
	// при необходимости отключить
	bildSliders();

	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});




//======================================================================================



// /*
// Документація по роботі у шаблоні: 
// Документація слайдера: https://swiperjs.com/
// Сніппет(HTML): swiper
// */

// // Підключаємо слайдер Swiper з node_modules
// // При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// // Приклад: { Navigation, Autoplay }
// import Swiper, { Navigation } from 'swiper';
// /*
// Основні модулі слайдера:
// Navigation, Pagination, Autoplay, 
// EffectFade, Lazy, Manipulation
// Детальніше дивись https://swiperjs.com/
// */

// // Стилі Swiper
// // Базові стилі
// import "../../scss/base/swiper.scss";
// // Повний набір стилів з scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// // Повний набір стилів з node_modules
// import 'swiper/css';

// // Ініціалізація слайдерів
// function initSliders() {
// 	// Список слайдерів
// 	// Перевіряємо, чи є слайдер на сторінці
// 	if (document.querySelector('.main-block__slider')) { // Вказуємо склас потрібного слайдера
// 		// Створюємо слайдер
// 		new Swiper('.main-block__slider', { // Вказуємо склас потрібного слайдера
// 			// Підключаємо модулі слайдера
// 			// для конкретного випадку
// 			modules: [Navigation],
// 			observer: true,
// 			observeParents: true,
// 			slidesPerView: 1,
// 			spaceBetween: 0,
// 			autoHeight: true,
// 			speed: 800,

// 			//touchRatio: 0,
// 			//simulateTouch: false,
// 			//loop: true,
// 			//preloadImages: false,
// 			//lazy: true,

// 			/*
// 			// Ефекти
// 			effect: 'fade',
// 			autoplay: {
// 				delay: 3000,
// 				disableOnInteraction: false,
// 			},
// 			*/

// 			// Пагінація
// 			/*
// 			pagination: {
// 				el: '.swiper-pagination',
// 				clickable: true,
// 			},
// 			*/

// 			// Скроллбар
// 			/*
// 			scrollbar: {
// 				el: '.swiper-scrollbar',
// 				draggable: true,
// 			},
// 			*/

// 			// Кнопки "вліво/вправо"
// 			navigation: {
// 				prevEl: '.swiper-button-prev',
// 				nextEl: '.swiper-button-next',
// 			},
// 			/*
// 			// Брейкпоінти
// 			breakpoints: {
// 				640: {
// 					slidesPerView: 1,
// 					spaceBetween: 0,
// 					autoHeight: true,
// 				},
// 				768: {
// 					slidesPerView: 2,
// 					spaceBetween: 20,
// 				},
// 				992: {
// 					slidesPerView: 3,
// 					spaceBetween: 20,
// 				},
// 				1268: {
// 					slidesPerView: 4,
// 					spaceBetween: 30,
// 				},
// 			},
// 			*/
// 			// Події
// 			on: {

// 			}
// 		});
// 	}
// }
// // Скролл на базі слайдера (за класом swiper scroll для оболонки слайдера)
// function initSlidersScroll() {
// 	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
// 	if (sliderScrollItems.length > 0) {
// 		for (let index = 0; index < sliderScrollItems.length; index++) {
// 			const sliderScrollItem = sliderScrollItems[index];
// 			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
// 			const sliderScroll = new Swiper(sliderScrollItem, {
// 				observer: true,
// 				observeParents: true,
// 				direction: 'vertical',
// 				slidesPerView: 'auto',
// 				freeMode: {
// 					enabled: true,
// 				},
// 				scrollbar: {
// 					el: sliderScrollBar,
// 					draggable: true,
// 					snapOnRelease: false
// 				},
// 				mousewheel: {
// 					releaseOnEdges: true,
// 				},
// 			});
// 			sliderScroll.scrollbar.updateSize();
// 		}
// 	}
// }

// window.addEventListener("load", function (e) {
// 	// Запуск ініціалізації слайдерів
// 	initSliders();
// 	// Запуск ініціалізації скролла на базі слайдера (за класом swiper_scroll)
// 	//initSlidersScroll();
// });
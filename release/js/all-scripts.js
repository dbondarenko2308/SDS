$(document).ready(function () {
$(document).ready(function() {
	$('.mask').each(function() {
		IMask(this, {
			mask: '+7 000 00-00-00',
			lazy: true
		})
	})

	const $button = $('.down-up')
	const bottomOffset = 20

	$button.on('click', function() {
		$('html, body').animate({ scrollTop: 0 }, 600)
	})

	$(window).on('scroll resize', function() {
		const scrollTop = $(window).scrollTop()
		const windowHeight = $(window).height()
		const windowWidth = $(window).width()
		let footerTop

		if (windowWidth < 991) {
			footerTop = $('footer').offset().top - 210
		} else {
			footerTop = $('footer').offset().top - 220
		}

		const stopPoint = footerTop - windowHeight + bottomOffset + 300

		if (scrollTop > 200) {
			$button.addClass('show')
		} else {
			$button.removeClass('show')
		}

		
	})

	$.fancybox.defaults.touch = false
	$.fancybox.defaults.closeExisting = true

	$('.header__burger').on('click', function() {
		$(this).toggleClass('active')
		$('.header__right').toggleClass('active')
		$('body').toggleClass('hidden')
	})

	const aboutNews = new Swiper('.showcase__slider', {
		slidesPerView: 1,
		spaceBetween: 20,

		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true
		}
	})

	var init1 = false
	var swiper1
	function swiperHow() {
		if (window.innerWidth < 992) {
			if (!init1) {
				init1 = true
				swiper1 = new Swiper('.prod__slider', {
					slidesPerView: 1,
					spaceBetween: 20,
					loop: true,
					pagination: {
						el: '.swiper-pagination',
						type: 'bullets',
						clickable: true
					}
				})
			}
		} else if (init1) {
			swiper1.destroy()
			init1 = false
		}
	}

	swiperHow()
	window.addEventListener('resize', swiperHow)

	$(function() {
		const $tabs = $('[data-tab]')
		const $sliders = $('[data-tab-slider]')
		const $next = $('.action__next')
		const $prev = $('.action__prev')

		let swipers = []
		let activeIndex = 0

		function updateArrows(swiper) {
			$prev.toggleClass('disabled', swiper.isBeginning)
			$next.toggleClass('disabled', swiper.isEnd)
		}

		$sliders.each(function(index) {
			const swiper = new Swiper($(this).find('.action__slider')[0], {
				slidesPerView: 1,
				spaceBetween: 20,
				speed: 600,

				pagination: {
					el: '.swiper-pagination',
					type: 'bullets',
					clickable: true
				},
				breakpoints: {
					992: {
						slidesPerView: 2
					}
				},

				on: {
					init: function() {
						if (index === activeIndex) updateArrows(this)
					},
					slideChange: function() {
						if (index === activeIndex) updateArrows(this)
					}
				}
			})

			swipers.push(swiper)
		})

		$sliders.hide().eq(0).show()

		$tabs.on('click', function() {
			const index = $(this).index()
			if (index === activeIndex) return

			$tabs.removeClass('active')
			$(this).addClass('active')

			$sliders.hide().eq(index).fadeIn(200)

			activeIndex = index

			swipers[index].update()
			updateArrows(swipers[index])
		})

		$next.on('click', function() {
			swipers[activeIndex].slideNext()
		})

		$prev.on('click', function() {
			swipers[activeIndex].slidePrev()
		})
	})

	$(function() {
		const $tabs = $('[data-course]')
		const $sliders = $('[data-tab-course]')
		const $next = $('.course__next')
		const $prev = $('.course__prev')

		let swipers = []
		let activeIndex = 0

		function updateArrows(swiper) {
			$prev.toggleClass('disabled', swiper.isBeginning)
			$next.toggleClass('disabled', swiper.isEnd)
		}

		$sliders.each(function(index) {
			const swiper = new Swiper($(this).find('.course__slider')[0], {
				slidesPerView: 1,
				spaceBetween: 20,
				speed: 600,

				pagination: {
					el: '.swiper-pagination',
					type: 'bullets',
					clickable: true
				},
				breakpoints: {
					992: {
						slidesPerView: 3
					},

					1300: {
						slidesPerView: 4
					}
				},

				on: {
					init: function() {
						if (index === activeIndex) updateArrows(this)
					},
					slideChange: function() {
						if (index === activeIndex) updateArrows(this)
					}
				}
			})

			swipers.push(swiper)
		})

		$sliders.hide().eq(0).show()

		$tabs.on('click', function() {
			const index = $(this).index()
			if (index === activeIndex) return

			$tabs.removeClass('active')
			$(this).addClass('active')

			$sliders.hide().eq(index).fadeIn(200)

			activeIndex = index

			swipers[index].update()
			updateArrows(swipers[index])
		})

		$next.on('click', function() {
			swipers[activeIndex].slideNext()
		})

		$prev.on('click', function() {
			swipers[activeIndex].slidePrev()
		})
	})



		if ($('#map-contacts').length > 0) {
		ymaps.ready(mapContacts)
		function mapContacts() {
			var myMap = new ymaps.Map('map-contacts', {
				center: [59.9422, 30.2389],
				zoom: 15,
				controls: []
			})
			var zoomControl = new ymaps.control.ZoomControl({
				options: {
					position: {
						right: '14px',
						top: '150px'
					}
				}
			})
			if ($(window).width() >= 991) {
				myMap.behaviors.disable('scrollZoom')
				myMap.controls.add(zoomControl)
			} else {
				myMap.behaviors.disable('drag')
			}

			mapAdres1 = new ymaps.GeoObjectCollection(null, {
				preset: 'islands#yellowIcon',
				iconLayout: 'default#image',
				iconImageHref: '/images/mark.svg',
				iconImageSize: [142, 45]
			})
			mapAdres1.add(new ymaps.Placemark([59.9422, 30.2389]))

			myMap.geoObjects.add(mapAdres1)
		}
	}
})



});
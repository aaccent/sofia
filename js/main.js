$(document).ready(function () {

	//модалка
	$('.home_slide__button, .header_top__booking').on('click', function (e) {
		e.preventDefault();
		$('.home_modal').toggle();
		$('body').addClass('hidden');
	});

	$('.home_request__button').on('click', function (e) {
		e.preventDefault();
		$('.home_modal__success').toggle();
		$('body').toggleClass('hidden');
	});


	$('.home_modal__close').on('click', function (e) {
		e.preventDefault();
		$('.home_modal').toggle();
		$('body').removeClass('hidden');
	});

	// закрытие модалки на esc
	$(document).on('keyup', function (e) {
		if (e.key == "Escape") {
			$(".home_modal").hide();
		}
		$('body').removeClass('hidden');
	});

	$('.home_modal__success--close').on('click', function (e) {
		e.preventDefault();
		$('.home_modal__success').toggle();
		$('.home_modal').toggle();
		$('body').removeClass('hidden');
	});

	// 
	if ($(window).width() < 1199) {
		const content = $('.home_modal__choose');

		$('.home_slide__img').on('click', function (e) {
			e.preventDefault();
			if (!$(this).hasClass("no-modal")) {
				$('.home_modal__choose').toggle();
				$('body, .home_modal__choose').addClass('hidden');
				const title = $(this).closest('.home_choose__click').find('.home_choose__subtitle').html();
				const h3 = $(this).closest('.home_choose__click').find('.h3').html();
				const p = $(this).closest('.home_choose__click').find('p').html();
				const account_img = $(this).closest('.home_choose__click').find('.home_slide__img').css('background-image').replace(/^url\(['"]?/, '').replace(/['"]?\)$/, '');
				const description = $(this).closest('.home_choose__click').find('.home_choose__text').html();
				content.find('.home_choose-modal__title').html(title);
				content.find('.home_choose__description').html(description);
				content.find('.h3').html(h3);
				content.find('p').html(p);
				content.find('.home_choose__img').attr({ src: account_img });
			}

		});
	}

	if ($(window).width() > 1199) {
		$('.home_slide__img').hover(function(){
			if (!$(this).hasClass("no-modal")) {
			$(this).toggleClass('hover_block');
			}
		})
	}

	$('.home_choose__close').on('click', function (e) {
		e.preventDefault();
		$('.home_modal__choose').toggle();
		$('body, .home_modal__choose').removeClass('hidden');
	});

	// закрытие модалки на esc
	$(document).on('keyup', function (e) {
		if (e.key == "Escape") {
			$(".home_modal__choose").hide();
		}
		$('body').removeClass('hidden');
	});

	// бонусная система модалка - главная страница

	const bonus_content = $('.home_modal__bonus');
	$('.bonus_link').on('click', function (e) {
		e.preventDefault();
		$('.home_modal__bonus').toggle();
		$('body, .home_modal__bonus').addClass('hidden');
		const title_bonus = $(this).closest('.home_bonus__center').find('.home_bonus__title').html();
		const description_bonus = $(this).closest('.home_bonus__center').find('.home_bonus__subtitle').html();
		const p_bonus = $(this).closest('.home_bonus__center').find('.home_bonus__content').html();

		bonus_content.find('.home_choose-modal__title').html(title_bonus);
		bonus_content.find('.home_bonus__description').html(description_bonus);
		bonus_content.find('p').html(p_bonus);
	});

	// закрытие модалки бонус на главной
	$('.home_bonus__close').on('click', function (e) {
		e.preventDefault();
		$('.home_modal__bonus').toggle();
		$('body, .home_modal__bonus').removeClass('hidden');
	});

	// закрытие модалки на esc
	$(document).on('keyup', function (e) {
		if (e.key == "Escape") {
			$(".home_modal__bonus").hide();
		}
		$('body').removeClass('hidden');
	});


	// 1 слайдер на главной
	const swiper = new Swiper(".homeSlide", {

		loop: true,
		slidesPerView: 1,

		navigation: {
			nextEl: ".homeSlide .swiper-button-next",
			prevEl: ".homeSlide .swiper-button-prev",
		},
	});



	//слайдер на главной прелесть зимнего сезона

	const winterSwiper = new Swiper(".WinterSlide", {

		loop: true,
		slidesPerView: 1,

		navigation: {
			nextEl: ".WinterSlide .swiper-button-next",
			prevEl: ".WinterSlide .swiper-button-prev",
		},
	});

	//слайдер на главной Welcome


	const welcomeSlide = new Swiper(".welcomeSlide", {

		loop: true,
		slidesPerView: 1,

		navigation: {
			nextEl: ".welcome-button-next",
			prevEl: ".welcome-button-prev",
		},
	});

	//слайдер нас выбирают - главная

	const chooseSlide = new Swiper(".chooseSlide", {

		loop: true,
		slidesPerView: 1,
		spaceBetween: 20,

		breakpoints: {
			// when window width is >= 320px
			992: {
				slidesPerView: 1.5,
				spaceBetween: 50,
			},

			1199: {
				slidesPerView: 2,
				spaceBetween: 60,
			}
		},

		navigation: {
			nextEl: ".choose-button-next",
			prevEl: ".choose-button-prev",
		},
	});

	// 

	const newswiper = new Swiper(".newswiper", {
		loop: true,

		navigation: {
			nextEl: ".news-button-next",
			prevEl: ".news-button-prev",
		},
	});


	// каталог слайд кафе
	const cafeslide = new Swiper(".cafeslide", {

		loop: true,
		slidesPerView: 1,

		navigation: {
			nextEl: ".cafe-button-next",
			prevEl: ".cafe-button-prev",
		},
	});


	// каталог слайд бар
	const barslide = new Swiper(".barslide", {

		loop: true,
		slidesPerView: 1,

		navigation: {
			nextEl: ".bar-button-next",
			prevEl: ".bar-button-prev",
		},
	});

	//выбор языка - хедер
	$(".button_lang__text").click(function () {
		$(".languages_list").toggleClass('active');
		if ($(".languages_list").hasClass("active")) {
			$(this).addClass("active");
		} else {
			$(this).removeClass("active");
		}
	});
	$(".languages_list li").click(function () {
		$(".button_lang__text").text($(this).text());
		$(".button_lang__text").removeClass('active');
		$(".languages_list").removeClass('active');
		$('.languages_list li').removeClass('active');
		$(this).addClass('active');
	});

	const catalog_page2 = new Swiper(".catalog_small", {
		spaceBetween: 20,
		slidesPerView: 3,
		loop: true,
		navigation: {
			nextEl: ".catalog-button-next",
			prevEl: ".catalog-button-prev",
		},

		breakpoints: {

			501: {
				slidesPerView: 4,
			},

			992: {
				slidesPerView: 6,
			},

			1200: {
				slidesPerView: 8,
			}
		},

	});

	const catalog_page = new Swiper(".catalog_image", {
		spaceBetween: 20,
		slidesPerView: 1,
		loop: true,
		navigation: {
			nextEl: ".catalog-button-next",
			prevEl: ".catalog-button-prev",
		},
		thumbs: {
			swiper: catalog_page2,
		},

	});


	$(window).scroll(function () {
		var top = $(document).scrollTop();
		if (top < 200) $(".news_read__block").removeClass('news_read__block-sticky');
		else $(".news_read__block").addClass('news_read__block-sticky');
	});

});



// Maps
let map, bounds, markers = []
let addMarkersOnMap, activeMarkerObject
// const openedMarkerIcon = './image/dot-place-open.png'

async function initMap() {
	if (!document.getElementById('map')) return

	class CustomInfoWindow extends google.maps.OverlayView {
		position
		infoWindowDiv

		constructor(position, content, classList = ['info-window']) {
			super()
			this.position = position

			const infoWindowPos = document.createElement('div')

			infoWindowPos.classList.add('popup__pos')
			infoWindowPos.innerHTML = content

			this.infoWindowDiv = document.createElement('div')
			this.infoWindowDiv.classList.add(...classList)
			this.infoWindowDiv.appendChild(infoWindowPos)

			CustomInfoWindow.preventMapHitsAndGesturesFrom(this.infoWindowDiv)
		}

		onAdd() {
			this.getPanes()?.floatPane.appendChild(this.infoWindowDiv)
		}

		onRemove() {
			if (this.infoWindowDiv.parentElement) {
				this.infoWindowDiv.parentElement.removeChild(this.infoWindowDiv)
			}
		}

		draw() {
			const divPosition = this.getProjection().fromLatLngToDivPixel(
				this.position,
			)

			const display =
				Math.abs(divPosition.x) < 2000 && Math.abs(divPosition.y) < 4000
					? 'block'
					: 'none'

			if (display === 'block') {
				this.infoWindowDiv.style.left = divPosition.x + 'px'
				this.infoWindowDiv.style.top = divPosition.y + 'px'
			}

			if (this.infoWindowDiv.style.display !== display) {
				this.infoWindowDiv.style.display = display
			}
		}
	}

	bounds = new google.maps.LatLngBounds()

	const mapStyles = await getStyles()
	map = new google.maps.Map(document.getElementById('map'), {
		styles: mapStyles,
	})

	function createMarker(data) {
		const marker = new google.maps.Marker({
			position: data.pos, map, icon: data.markerIcon, icons: data.markerActive
		})

		bounds.extend(marker.position)
		return marker
	}

	function createInfoWindow(data) {
		const infoWindowContent = `
			<div class="info-window__inner ${data.class ? data.class : ''}">
				<div class="info-window__body">
					<div class="info-window__title">${data.name}</div>
					<div class="info-window__info">${data.info}</div>
				</div>
			</div>`

		return new CustomInfoWindow(
			new google.maps.LatLng(data.pos.lat, data.pos.lng),
			infoWindowContent,
		)
	}

	addMarkersOnMap = function (data) {
		return data.map(item => {
			const markerObj = {}

			const marker = createMarker(item)
			const infoWindow = createInfoWindow(item)

			markerObj.id = item.id
			markerObj.marker = marker
			markerObj.infoWindow = infoWindow
			markerObj.icon = {
				default: item.markerIcon,
				active: item.markerActive
			}
			marker.type = item.type

			marker.addListener('click', () => {
				activateListItem(item.id)
				openInfoWindow(markerObj)
			})

			markers.push(markerObj)
			return markerObj
		})
	}

	createMap()
}

async function createMap() {
	map.addListener('click', closeActiveMarker)
	map.addListener('drag', closeActiveMarker)

	const markersData = await getMarkersData()

	let currentMarkers = addMarkersOnMap(markersData)
	openInfoWindow(currentMarkers[0])

	map.fitBounds(bounds)
}

async function getMarkersData() {
	// const res = await fetch('/ajax/contacts')
	// const result = await red.text()
	return [
		{
			id: 1,
			name: 'Апарт отель София',
			pos: { lat: 38.53199, lng: -0.16153 },
			info: '250 метров',
			markerIcon: './image/map-icon.png',
			class: 'markertop',
			markerActive: './image/map-icon-blue.png',
		},

		{
			id: 2,
			name: 'Пляж Поньенте',
			pos: { lat: 38.530557, lng: -0.159846 },
			info: '250 метров',
			markerIcon: './image/dot-place.png',
			markerActive: './image/dot-place-open.png'
		},
		{
			id: 3,
			name: 'Поле для гольфа Las Rejas',
			pos: { lat: 38.544546, lng: -0.150866 },
			info: '250 метров',
			markerIcon: './image/dot-place.png',
			markerActive: './image/dot-place-open.png',
			class: 'markergolf'
		},
		{
			id: 4,
			name: 'Пляж Маль Пас',
			pos: { lat: 38.535152, lng: -0.132102 },
			info: '250 метров',
			markerIcon: './image/dot-place.png',
			markerActive: './image/dot-place-open.png',
		},
		{
			id: 5,
			name: 'Парк аттракционов Terra Mítica',
			pos: { lat: 38.561004, lng: -0.158390 },
			info: '250 метров',
			markerIcon: './image/dot-place.png',
			markerActive: './image/dot-place-open.png',
			class: 'marketterra'
		},
		{
			id: 6,
			name: 'Аквапарк «Аква Натура»',
			pos: { lat: 38.571800, lng: -0.146105 },
			info: '250 метров',
			markerIcon: './image/dot-place.png',
			markerActive: './image/dot-place-open.png',
			class: 'markergolf'
		},
		{
			id: 7,
			name: 'Ресторан Va Bene',
			pos: { lat: 38.533601, lng: -0.156943 },
			info: '250 метров',
			markerIcon: './image/dot-place.png',
			markerActive: './image/dot-place-open.png'
		},
	]
}

async function getStyles() {
	//const res = await fetch('/js/mapStyles.json')
	//const mapStyles = await res.json()
	return [
		{
			'elementType': 'labels.text.fill',
			'stylers': [
				{
					'color': '#335d6c',
				},
			],
		},
		{
			'featureType': 'administrative',
			'elementType': 'geometry',
			'stylers': [
				{
					'visibility': 'off',
				},
			],
		},
		{
			'featureType': 'administrative.country',
			'elementType': 'geometry.stroke',
			'stylers': [
				{
					'color': '#4b6878',
				},
			],
		},
		{
			'featureType': 'administrative.land_parcel',
			'elementType': 'labels.text.fill',
			'stylers': [
				{
					'color': '#64779e',
				},
			],
		},
		{
			'featureType': 'administrative.province',
			'elementType': 'geometry.stroke',
			'stylers': [
				{
					'color': '#4b6878',
				},
			],
		},
		{
			'featureType': 'landscape.man_made',
			'stylers': [
				{
					'color': '#cfe9f1',
				},
			],
		},
		{
			'featureType': 'landscape.man_made',
			'elementType': 'geometry.stroke',
			'stylers': [
				{
					'color': '#579ab2',
				},
				{
					'saturation': 5,
				},
				{
					'weight': 8,
				},
			],
		},
		{
			'featureType': 'landscape.natural',
			'stylers': [
				{
					'color': '#b4dbe9',
				},
			],
		},
		{
			'featureType': 'poi',
			'stylers': [
				{
					'visibility': 'off',
				},
			],
		},
		{
			'featureType': 'poi',
			'elementType': 'geometry',
			'stylers': [
				{
					'color': '#283d6a',
				},
			],
		},
		{
			'featureType': 'poi',
			'elementType': 'labels.text.fill',
			'stylers': [
				{
					'color': '#6f9ba5',
				},
			],
		},
		{
			'featureType': 'poi',
			'elementType': 'labels.text.stroke',
			'stylers': [
				{
					'color': '#1d2c4d',
				},
			],
		},
		{
			'featureType': 'poi.park',
			'elementType': 'geometry.fill',
			'stylers': [
				{
					'color': '#023e58',
				},
			],
		},
		{
			'featureType': 'poi.park',
			'elementType': 'labels.text.fill',
			'stylers': [
				{
					'color': '#3c7680',
				},
			],
		},
		{
			'featureType': 'road',
			'elementType': 'geometry',
			'stylers': [
				{
					'color': '#f0f8fb',
				},
			],
		},
		{
			'featureType': 'road',
			'elementType': 'geometry.stroke',
			'stylers': [
				{
					'color': '#6fbbd6',
				},
			],
		},
		{
			'featureType': 'road',
			'elementType': 'labels.icon',
			'stylers': [
				{
					'visibility': 'off',
				},
			],
		},
		{
			'featureType': 'road',
			'elementType': 'labels.text.fill',
			'stylers': [
				{
					'color': '#155f79',
				},
			],
		},
		{
			'featureType': 'road',
			'elementType': 'labels.text.stroke',
			'stylers': [
				{
					'visibility': 'off',
				},
			],
		},
		{
			'featureType': 'road.highway',
			'elementType': 'labels.text.stroke',
			'stylers': [
				{
					'color': '#023e58',
				},
			],
		},
		{
			'featureType': 'transit',
			'stylers': [
				{
					'visibility': 'off',
				},
			],
		},
		{
			'featureType': 'transit',
			'elementType': 'labels.text.fill',
			'stylers': [
				{
					'color': '#98a5be',
				},
			],
		},
		{
			'featureType': 'transit',
			'elementType': 'labels.text.stroke',
			'stylers': [
				{
					'color': '#1d2c4d',
				},
			],
		},
		{
			'featureType': 'transit.line',
			'stylers': [
				{
					'visibility': 'off',
				},
			],
		},
		{
			'featureType': 'transit.line',
			'elementType': 'geometry.fill',
			'stylers': [
				{
					'color': '#283d6a',
				},
			],
		},
		{
			'featureType': 'transit.station',
			'elementType': 'geometry',
			'stylers': [
				{
					'color': '#3a4762',
				},
			],
		},
		{
			'featureType': 'water',
			'elementType': 'geometry',
			'stylers': [
				{
					'color': '#6fbbd6',
				},
			],
		},
		{
			'featureType': 'water',
			'elementType': 'labels.text.fill',
			'stylers': [
				{
					'color': '#4e6d70',
				},
			],
		},
	]
}

const homeLandmarks = document.querySelectorAll('.home_landmark li')
homeLandmarks.forEach(mark => {
	mark.addEventListener('click', function (e) {
		const id = +e.currentTarget.dataset.id
		const targetMarker = markers.find(obj => obj.id === id)

		activateListItem(id)
		openInfoWindow(targetMarker)
	})
})

function activateListItem(id) {
	const element = document.querySelector(`.home_landmark li[data-id="${id}"]`)
	const activeEl = document.querySelector('.home_landmark li.active')
	activeEl.classList.remove('active')
	element.classList.add('active')
}

function openInfoWindow(markerObj) {
	const infoWindow = markerObj.infoWindow
	const marker = markerObj.marker

	closeActiveMarker()

	marker.setIcon(markerObj.icon.active)
	infoWindow.setMap(map)

	activeMarkerObject = markerObj
}

function closeActiveMarker() {
	if (activeMarkerObject) activeMarkerObject.infoWindow.setMap(null)
	if (activeMarkerObject) activeMarkerObject.marker.setIcon(activeMarkerObject.icon.default)
}

window.initMap = initMap

// куки
function checkCookies() {
	let cookieDate = localStorage.getItem('cookieDate');
	let cookieNotification = document.getElementById('cookie_notification');
	let cookieBtn = cookieNotification.querySelector('.cookie_accept');

	// Если записи про кукисы нет или она просрочена на 1 год, то показываем информацию про кукисы
	if (!cookieDate || (+cookieDate + 31536000000) < Date.now()) {
		cookieNotification.classList.add('show');
	}

	// При клике на кнопку, в локальное хранилище записывается текущая дата в системе UNIX
	cookieBtn.addEventListener('click', function () {
		//localStorage.setItem( 'cookieDate', Date.now() );
		cookieNotification.classList.remove('show');
	})
}
checkCookies();


// выпадающее меню
var burgerMenu = document.querySelector('.header_menu');
var overlay = document.querySelector('.header_none');
burgerMenu.addEventListener('click', function () {
	this.classList.toggle("active");
	overlay.classList.toggle("active_block");
});
overlay.addEventListener('click', function (e) {
	if (e.target.matches('a')) {
		overlay.classList.remove('active_block');
		burgerMenu.classList.remove('active');
	}
});
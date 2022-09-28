$(document).ready(function () {

	// Меню
	if ($(window).width() < 767) {
		$('.header_menu').on('click', function (e) {
			e.preventDefault();
			$('.header_none').toggle();
			$('body').toggleClass('hidden');
		});
	}


	const menuBtn = $(".header_menu"),
		menu = $(".header_none");

	menuBtn.on("click", function () {
		if ($(this).hasClass("active")) {
			$(this).removeClass("active");
			menu.slideUp();
		} else {
			$(this).addClass("active");
			menu.slideDown();
		}
	});

	$(document).click(function (e) {
		if (!menuBtn.is(e.target) && !menu.is(e.target) && menu.has(e.target).length === 0) {
			menu.slideUp();
			menuBtn.removeClass("active");
		};
	});

	//модалка

	$('.home_slide__button, .header_top__booking').on('click', function (e) {
		e.preventDefault();
		$('.home_modal').toggle();
		$('body').addClass('hidden');
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

	// модалка почему стоит выбрать нас - главная страница
	const content = $('.home_modal__choose');
	$('.home_slide__img').on('click', function (e) {
		e.preventDefault();
		$('.home_modal__choose').toggle();
		$('body, .home_modal__choose').addClass('hidden');
		const title = $(this).closest('.home_choose__click').find('.home_choose__subtitle').html();
		const description = $(this).closest('.home_choose__click').find('.home_choose__text').html();
		const h3 = $(this).closest('.home_choose__click').find('.h3').html();
		const p = $(this).closest('.home_choose__click').find('p').html();
		const account_img = $(this).closest('.home_choose__click').find('.home_slide__img').css('background-image').replace(/^url\(['"]?/, '').replace(/['"]?\)$/, '');
		console.log(account_img)


		content.find('.home_choose-modal__title').html(title);
		content.find('.home_choose__description').html(description);
		content.find('.h3').html(h3);
		content.find('p').html(p);
		content.find('.home_choose__img').attr({ src: account_img });
	});

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


	//слайдер на главной

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


	$(".mobile-tabs").click(function () {
		$(".item__tabs").toggleClass('item__tabs_active');
		if ($(".item__tabs").hasClass("item__tabs_active")) {
			$(this).addClass("active");
		} else {
			$(this).removeClass("active");
		}
	});
	$(".item__tabitem").click(function () {
		$(".mobile-tabs").text($(this).text());
		$(".mobile-tabs").removeClass('active');
		$(".item__tabs").removeClass('item__tabs_active');
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
			// when window width is >= 320px

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


	// плавный переход по якорям

	$(".header_none__nav li a").click(function () {
		elementClick = jQuery(this).attr("href")
		destination = jQuery(elementClick).offset().top;
		jQuery("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination }, 1100);
		return false;
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
				Math.abs(divPosition.x) < 4000 && Math.abs(divPosition.y) < 4000
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
		center: { lat: 38.544546, lng: -0.150866 }, zoom: 13, styles: mapStyles,
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

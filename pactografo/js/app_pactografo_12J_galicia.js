'use strict';

var TOTAL_SEATS 		= 75;
var ABSOLUTE_MAJORITY 	= 38;
var BAR_DEFAULT_COLOR 	= '#e6e6e6';

function module(mod) {jQuery(function() {if (mod.init) {mod.init(); } }); return mod; }

var Main = module(function() {

	function init() {

		loading(true)
		$.get('https://lavanguardia-github.github.io/pactografo/json/data_pactografo_12J_galicia.json', function(res) {
			loading(false);

			_.each(res, function(item, index) {
				res[index] = {
					name 	: item[0],
					picture : item[1],
					color 	: item[2],
					seats 	: item[3]
				}
			});

			Main.data = res;
			$(document).trigger('gotData');

		}, 'json');

		// Para evitar el scroll en el parent frame
		$('.dropzone-area').on('touchmove', function(e) {
			e.preventDefault();
		});
	}

	function loading(isLoading) {
		if (isLoading) {
			$('.loading').fadeIn();
		} else {
			$('.loading').fadeOut();
		}
	}

	function selectedSum() {
		return _.sumBy(Main.selected, function(item) {
			return item.seats;
		});
	}

	return {
		init: init,
		selectedSum: selectedSum,
		data: null,
		selected: []
	};

}());

var Bar = module(function() {

	function init() {
		$(document).on('changedSelected', function() {
			refresh();
		});
	}

	function refresh() {
		var assignedSeats = Main.selectedSum();

		var percent = Math.round((assignedSeats / TOTAL_SEATS) * 100);

		$('.data-seats').stop().animateNumber({
			number: assignedSeats
		}, 1500);

		$('.data-seats').prop('number', assignedSeats);
		$('.data-fill').css('width', percent + '%');
	}

	return {
		init: init
	};

}());

var Drag = module(function() {
	var template;

	function init() {
		template = _.template($('#item-template').html());

		$(document).on('gotData', function() {
			initItems();
		});

		$(document).on('changedSelected', function() {
			updateLabel();
		});
	}

	function initItems() {
		_.each(Main.data, function(item) {
			var html = template(item);
			var $item = $('<div/>').html(html).find('.item');
			$item.data('item', item);
			$('.items').append($item);
		});

		initInteraction();
	}

	function initInteraction() {
		interact('.item').draggable({
			max: 1,
			inertia: {
				resistance: 8,
				minSpeed: 100,
				endSpeed: 10
			},
			restrict: {
				restriction: '.dropzone-area',
				endOnly: true,
				elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
			},
			autoScroll: true,
			onstart: function(event) {
				$(event.target).addClass('is-dragging');
			},
			onmove: function (event) {
				var target = event.target,
			        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
			        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

			    target.style.webkitTransform =
			    target.style.transform =
			    'translate(' + x + 'px, ' + y + 'px)';

			    target.setAttribute('data-x', x);
			    target.setAttribute('data-y', y);
			},
			onend: function (event) {
				var target = event.target;
				$(target).removeClass('is-dragging');

				// Si se ha soltado el elemento en la dropzone devolverlo a su sitio original
				if (!event.dropzone) {
					target.style.transition = 'all 0.3s';

					target.setAttribute('data-x', 0);
			    	target.setAttribute('data-y', 0);
					target.style.webkitTransform 
						= target.style.transform = 'translate(0px, 0px)';

					setTimeout(function() {
						target.style.transition = '';
					}, 500);
				}

			}
		});

		interact('.dropzone').dropzone({
			accept: '.item',
			overlap: 0.75,
			ondropactivate: function (event) {
			    // console.log('Drop activate');
			},
			ondragenter: function (event) {
				$(event.relatedTarget).addClass('is-dropped');

				// Lo agregamos así para que se agregue solo una vez
				var item = $(event.relatedTarget).data('item');
				Main.selected = _.union(Main.selected, [item]);
				$(document).trigger('changedSelected');
			},
			ondragleave: function (event) {
				$(event.relatedTarget).removeClass('is-dropped');

				// Quitamos el item de los selected
				var item = $(event.relatedTarget).data('item');
				Main.selected = _.without(Main.selected, item);
				$(document).trigger('changedSelected');
			},
			ondrop: function (event) {},
			ondropdeactivate: function (event) {}
		});
	}

	function updateLabel() {
		if (Main.selected.length >= 2) {
			$('.dropzone label').stop().fadeOut();
		} else {
			$('.dropzone label').stop().fadeIn();
		}
	}

	return {
		init: 	  init
	};

}());


var SeatsChart = module(function() {

	var myChart;

	function init() {

		$(document).on('changedSelected', function() {
			refresh();
		});

		var initialData = {
			datasets: [{
				data: [TOTAL_SEATS],
				backgroundColor: [BAR_DEFAULT_COLOR]
			}],
			labels:['Sin asignar']
		};

		var ctx = document.getElementById('chart-canvas');

		myChart = new Chart(ctx, {
			type: 'doughnut',
			data: initialData,
			options: {
				elements: {arc: {borderWidth: 0}},
				cutoutPercentage: 42,
				legend: {display:false},
				circumference: Math.PI,
				rotation: Math.PI,
				animation: {animateRotate: false, animateScale: false}
			}
		});

		window.myChart = myChart;
	}

	function refresh() {

		Main.selected = _.sortBy(Main.selected, function(o) { 
			return o.seats; 
		});

		Main.selected = _.reverse(Main.selected);

		var assignedSeats = Main.selectedSum();

		var remainingSeats = TOTAL_SEATS - assignedSeats;

		myChart.data.datasets[0].data = [];
		myChart.data.datasets[0].backgroundColor = [];
		myChart.data.labels = [];

		_.each(Main.selected, function(item, index) {
			myChart.data.datasets[0].data[index] 			= item.seats;
			myChart.data.datasets[0].backgroundColor[index] = item.color;
			myChart.data.labels[index] 			= item.name;
		});

		if (remainingSeats > 0) {
			myChart.data.datasets[0].data.push(remainingSeats);
			myChart.data.datasets[0].backgroundColor.push(BAR_DEFAULT_COLOR);
			myChart.data.labels.push('Sin asignar');
		}

		myChart.options.animation.animateRotate = false;
		myChart.update();
	}

	window.refresh = refresh;

	return {
		init: init
	};

}());



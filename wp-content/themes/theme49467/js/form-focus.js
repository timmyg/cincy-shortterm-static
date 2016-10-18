jQuery(document).ready(function($) {
	
	$('#search-header .search-form_it').click(function (e) {
	    e.preventDefault();
	    $('#search-header').addClass("focus");
	});

	$(document).mouseup(function (e) {
	    var container = $("#search-header");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	        container.removeClass("focus");
	    }
	});

	$('.nsu-form input[type="text"]').click(function (evt) {
	    evt.preventDefault();
	    $('.nsu-form').addClass("focus");
	});

	$(document).mouseup(function (evt) {
	    var container_nsu = $(".nsu-form");
	    if (!container_nsu.is(evt.target) && container_nsu.has(evt.target).length === 0) {
	        container_nsu.removeClass("focus");
	    }
	});
	
});
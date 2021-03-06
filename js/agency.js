/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// Shows current year
var currentYear = (new Date()).getFullYear();
	$(document).ready(function() {
	$("#year").text(currentYear);
});

// Age Verification
$(document).ready(function() {
    if($.cookie('pop') == null) {
        $('#ageModal').modal('show');
    }
    $('#age-yes').bind('click', function(event) {
        $.cookie('pop', '7', { expires: 7 }, { path: '/' });
    });
    $('#age-no').bind('click', function(event) {
        $.removeCookie('pop', { path: '/' });
    });
});

// Carousel
$('.carousel').carousel({
    interval: 3000
})
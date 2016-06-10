$(document).ready(function() {
	accordion();
});

// sidebar accordion
function accordion() {
	$('.aside-ul li').on({ 
		click: function(){
			$(this).children('.dropdown-ul').toggle(300);
		}
	});
}
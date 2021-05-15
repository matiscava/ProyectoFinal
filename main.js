$(document).ready(ArmaSecreta);

var contador = 1;

function ArmaSecreta () {
	$('.menu_bar').click(function(){
		if (contador == 1) {
			$('nav').animate({
				left: '0'
			});
			contador = 0;
		} else {
			contador = 1;
			$('nav').animate({
				left: '-100%'
			});
		}
	});

	// Mostramos y ocultamos submenus
	$('.sub_menu').click(function(){
		$(this).children('.hijo').slideToggle();
	});
}
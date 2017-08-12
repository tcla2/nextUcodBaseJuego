//////// cambiar color del logo
function cambiar_logo(selector) {
	$(selector).animate({
		opacity: '1',	},			 
			{step: function () {	$(this).css('color', 'white');},
			queue: true
		}) .animate({
			opacity: '1'}, { step: function () {	$(this).css('color', 'yellow');
			},
			queue: true
		}, 500).delay(1000).animate({
			opacity: '2'
		}, { step: function () {		$(this).css('color', 'white');
			},
			queue: true
		}) .animate({	opacity: '2'}, {step: function () {  $(this).css('color', 'yellow');
				cambiar_logo('h1.main-titulo');
			},
			queue: true
		});
}

////////////



function finalizar_juego() {
	$('div.panel-tablero, div.time').hide('Slide');
	$('h1.main-titulo').addClass('title-over').text('GAME OVER!')
	$('div.score, div.moves, div.panel-score').width('100%');
}

function iniciar_juego() {
	    cambiar_logo('h1.main-titulo');
	    $('.btn-reinicio').click(function () {
		if ($(this).text() === 'Reiniciar') {
			location.reload(true);			
		}
		$('#timer').delay(55000).effect('pulsate', 5000);verificar_tablero();
		$(this).text('Reiniciar');
		$('#timer').html("");
		$('#timer').startTimer({
			
			onComplete: finalizar_juego
			
		});
	});
}

$(function () {
	iniciar_juego();
		
	
});

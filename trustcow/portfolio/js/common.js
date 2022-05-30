$(document).ready(function() {
	$('.btn-side').click(function() {
		$('#side-menu').hasClass('active') ? $('#side-menu').removeClass('active') : $('#side-menu').addClass('active');
	});

	$('#side-menu li').click(function() {
		$(this).siblings('li').removeClass('on');
		$(this).addClass('on');

		var idx = $(this).index() + 1;
		var size = $('#sec_' + idx).offset().top - 72;

		$("html, body").stop().animate({
			scrollTop : size
		}, {
			duration : 500
		});


		if ($('#side-menu').hasClass('active')) {
			$('#side-menu').removeClass('active');
		} else {
			$('#side-menu').addClass('active');
		}
	});

	$('.menu .normal a').click(function() {
		$('.menu .normal a').removeClass('on');
		$('.menu .normal a:eq('+ $(this).index() +')').addClass('on');

		var idx = $(this).index() + 1;
		var size = $('#sec_' + idx).offset().top;

		$("html, body").stop().animate({
			scrollTop : size
		}, {
			duration : 500
		});
	});

	setInterval(function() {
		$(".ico-mouse").animate({
			"opacity" : 1,
			"bottom" : "-=15px"
		}).animate({
			"opacity" : 0.5,
			"bottom" : "+=15px"
		})
	}, 1000);
});

$(window).load(function() {
	$('section').removeClass('play');

	if (!$('#sec_1').hasClass('play')) {
		$('#sec_1').addClass('play');
	}

	$('.menu .normal a:eq(0)').addClass('on');

	setTimeout(function() {
		$(window).scrollTop(0);
	}, 100)
});

$(window).scroll(function() {
    if ($(window).scrollTop() == 0) {
        $('header').removeClass('fix');
    } else {
        $('header').addClass('fix');
    }

	var scroll = $(window).scrollTop();
	$('.menu .normal a').removeClass('on');

	if (scroll >= $('#sec_1').offset().top && (scroll < $('#sec_2').offset().top - 130)) {
		$('.menu .normal a:eq(0)').addClass('on');

		if (scroll >= ($('#sec_2').offset().top - ($(window).outerHeight() * 0.7))) {
			$('#sec_2').hasClass('play') ? '' : $('#sec_2').addClass('play');
		}
	} else {
		if (scroll >= ($('#sec_2').offset().top - 130) && scroll < ($('#sec_3').offset().top - 130)) {
			$('.menu .normal a:eq(1)').addClass('on');

			if (scroll >= ($('#sec_3').offset().top - ($(window).outerHeight() * 0.7))) {
				$('#sec_3').hasClass('play') ? '' : $('#sec_3').addClass('play');
			}
		} else {
			if (scroll >= ($('#sec_3').offset().top - 130)) {
				$('.menu .normal a:eq(2)').addClass('on');
			}

			if (scroll >= ($('#sec_4').offset().top - ($(window).outerHeight() * 0.7))) {
				$('#sec_4').hasClass('play') ? '' : $('#sec_4').addClass('play');
			}
		}
	}
});
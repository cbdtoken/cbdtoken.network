jQuery(function ($) {

    /*-- Strict mode enabled --*/
    "use strict";
    var _document = $(document),
        _window = $(window),
        _body = $("body");

    //animated navbar-toggler button
    _document.on('click', '.navbar .navbar-toggler', function () {
        $(this).toggleClass("change");
    });

    _document.on('click', function (e) {
        var _navMenu = $('.navbar-nav li');
        if ($('.navbar-collapse').hasClass('show')) {
            if (!_navMenu.is(e.target) && _navMenu.has(e.target).length === 0) {
                $('.navbar-collapse').removeClass('show');
                $(".navbar-toggler").removeClass('change');
            }
        }
    });

    //script for box equal height
    var maxHeight = 0;
    $(".equalHeight").each(function () {
        if ($(this).height() > maxHeight) {
            maxHeight = $(this).height();
        }
    });
    $(".equalHeight").height(maxHeight);

    //Video modal
    $('.video-popup').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-with-zoom',
        iframe: {
            markup: '<div class="mfp-iframe-scaler">' +
                '<div class="mfp-close"></div>' +
                '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
                '</div>',
            patterns: {
                youtube: {
                    index: 'youtube.com/',
                    id: 'v=',
                    src: '//www.youtube.com/embed/%id%?autoplay=1'
                }
            },
            srcAction: 'iframe_src'
        }

    });

    //jQuery countdown plugin
    $('#clock').countdown('2020/10/10').on('update.countdown', function (event) {
        var _DateInput = '' +
            '<div><span>%-d</span> Day%!d</div>' +
            '<div><span>%H</span> Hours</div>' +
            '<div><span>%M</span> Minutes</div>' +
            '<div><span>%S</span> Seconds</div>';
        var $this = $(this).html(event.strftime(_DateInput));
    });

    // Token slider 
    $('.token-slider .carousel-container').slick({
        dots: true,
        infinite: true,
        speed: 200,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    //Highchart
    if ($('.pie-chart').length > 0) {
        Highcharts.chart('container', {
            chart: {
                type: 'pie',
                options3d: {
                    enabled: true,
                    alpha: 50
                }
            },
			tooltip: { enabled: false },            
            title: {
                text: 'Contents of Highsoft\'s weekly fruit delivery'
            },
            subtitle: {
                text: '3D donut in Highcharts'
            },
            plotOptions: {
                pie: {
                    innerSize: 100,
                    depth: 50
                }
            },
            series: [{
                data: [
                    ['Airdrop 5%', 1],
                    ['Advisors 5%', 1],                    
                    ['Founder 10%', 2],
                    ['Token Sale 30%', 6],
                    ['Exchanges 50%', 10]
                ]
            }]
        });
    }

    //SVG Line animation
    $(".roadmap-to-success").each(function () {
        $(this).waypoint(function () {
            var _svgPath = $('.roadmap-line-path'),
                _svgPathLength = $('.roadmap-line-path').get(0).getTotalLength(),
                _labelLength = $('.roadmap-label').length;

            _svgPath.css({
                'opacity': '1',
                'stroke-dashoffset': _svgPathLength,
                'stroke-dasharray': _svgPathLength
            });

            setTimeout(function () {
                _svgPath.animate({
                    "stroke-dashoffset": _svgPathLength
                }, 0, function () {
                    _svgPath.animate({
                        "stroke-dashoffset": '0px'
                    }, {
                        duration: 1500,
                        // easing: 'linear',
                        step: function () {
                            var a = parseInt(_svgPath.css("stroke-dashoffset"));
                            for (var i = 0; i < _svgPathLength; i++) {
                                if (a < _svgPathLength * (_labelLength - i) / _labelLength) {
                                    $(".roadmap-label.l-" + (i + 1)).fadeIn().addClass("active");
                                }
                            }
                        }
                    }, function () {
                        //callback ...
                    });
                });
            });
            this.destroy();
        }, {
            triggerOnce: true,
            offset: 'bottom-in-view'
        });
    });


    //Show data on click event
    /*
    var _roadmapContainer = $('.roadmap-container'),
        _roadMapLabel = $('.roadmap-label');

    _roadmapContainer.on('click', '.roadmap-label', function () {
        if ($(this).find('.data.active').length === 0) {
            //remove
            _roadmapContainer.find('.data').removeClass('active');
            $(this).find('.data').addClass('active');
            _roadMapLabel.removeClass('glow');
            $(this).addClass('glow');

            if (_window.width() < 768) {
                _roadmapContainer.find('.data .card').slideUp();
                $(this).find('.data .card').slideDown(function () {
                    $('html, body').animate({
                        scrollTop: $(this).offset().top - 90
                    }, 500);
                });

            } else {
                _roadmapContainer.find('.data .card').fadeOut("slow");
                $(this).find('.data .card').fadeIn("slow");
            }
        }
    });

    _document.on('click', function (e) {
        if (!_roadMapLabel.is(e.target) && _roadMapLabel.has(e.target).length === 0) {
            _roadmapContainer.find('.data').removeClass('active');
            _roadMapLabel.removeClass('glow');
            if (_window.width() < 768) {
                _roadmapContainer.find('.data .card').slideUp();
            } else {
                _roadmapContainer.find('.data .card').fadeOut();
            }
        }
    });
	*/
	
    // Contact Form
    $('.contact-form').on('focus', 'input,textarea', function (e) {
        $(this).parent('.form-group').addClass('focused');
    });

    $('.contact-form').on('blur', 'input,textarea', function (e) {
        if (!$(this).val()) {
            $(this).parent('.form-group').removeClass('focused');
        }
    })

    //Global Form validation
    $('.contact-form').on('submit', function (e) {
        e.preventDefault();
        var _self = $(this),
            data = $(this).serialize(),
            __selector = _self.closest('input,textarea');

        _self.closest('div').find('input,textarea').removeAttr('style');
        _self.find('.err-msg').remove();
        _self.find('.form-success').removeClass('form-success');

        $('.submit-loading-img').css('display', 'block');
        _self.closest('div').find('button[type="submit"]').attr('disabled', 'disabled');

        $.ajax({
            url: 'email/email.php',
            type: "post",
            dataType: 'json',
            data: data,
            success: function (data) {
                $('.submit-loading-img').css('display', 'none');
                _self.closest('div').find('button[type="submit"]').removeAttr('disabled');

                if (data.code == false) {
                    _self.closest('div').find('[name="' + data.field + '"]').addClass('form-success');
                    _self.closest('div').find('[name="' + data.field + '"]').parent().after('<div class="err-msg">*' + data.err + '</div>');
                } else {
                    _self.find('textarea:last-child').after('<div class="success-msg">' + data.success + '</div>');
                    _self[0].reset();
                    $('.contact-form .form-group').removeClass('focused');
                    setTimeout(function () {
                        $('.success-msg').fadeOut('slow');
                    }, 5000);
                }
            }
        });
    });

    //progress bar
    $(".progress").each(function () {
        $(this).waypoint(function () {
            $('.progress-bar').progressbar({
                transition_delay: 100
            });
        }, {
            triggerOnce: true,
            offset: 'bottom-in-view'
        });
    });

    // Jump to bookmark
    var _anim = function () {
        $('html, body').animate({
            scrollTop: $('.ico-funding').offset().top
        }, 800, 'easeInOutExpo');
    }


    var _commonTab = $('.common-tab .nav li a'),
        _tabPane = $('.tab-pane'),
        _footerItem = $('.footer-nav li a');

    _window.on('load', function () {
        var loc = window.location.href;

        if (/tab-campaign/.test(loc)) {
            _commonTab.removeClass('active');
            _tabPane.removeClass('show active');
            $('.common-tab .nav li a[href^="#tab-campaign"]').addClass('active');
            $('.tab-pane#tab-campaign').addClass('show active');
            _footerItem.removeClass('active');
            $('.footer-nav li a[href^="#tab-campaign"]').addClass('active');
            _anim();
        } else if (/tab-faqs/.test(loc)) {
            _commonTab.removeClass('active');
            _tabPane.removeClass('show active');
            $('.common-tab .nav li a[href^="#tab-faqs"]').addClass('active');
            $('.tab-pane#tab-faqs').addClass('show active');
            _footerItem.removeClass('active');
            $('.footer-nav li a[href^="#tab-faqs"]').addClass('active');
            _anim();
        } else if (/tab-update/.test(loc)) {
            _commonTab.removeClass('active');
            _tabPane.removeClass('show active');
            $('.common-tab .nav li a[href^="#tab-update"]').addClass('active');
            $('.tab-pane#tab-update').addClass('show active');
            _footerItem.removeClass('active');
            $('.footer-nav li a[href^="#tab-update"]').addClass('active');
            _anim();
        }
    });

    //test
    $('.footer-nav').on('click', 'li a', function () {
        if ($(this).attr('href') === "#tab-campaign") {
            _commonTab.removeClass('active');
            _tabPane.removeClass('show active');
            $('.common-tab .nav li a[href^="#tab-campaign"]').addClass('active');
            $('.tab-pane#tab-campaign').addClass('show active');
            _footerItem.removeClass('active');
            $('.footer-nav li a[href^="#tab-campaign"]').addClass('active');
            _anim();
        } else if ($(this).attr('href') === "#tab-faqs") {
            _commonTab.removeClass('active');
            _tabPane.removeClass('show active');
            $('.common-tab .nav li a[href^="#tab-faqs"]').addClass('active');
            $('.tab-pane#tab-faqs').addClass('show active');
            _footerItem.removeClass('active');
            $('.footer-nav li a[href^="#tab-faqs"]').addClass('active');
            _anim();
        } else if ($(this).attr('href') === "#tab-update") {
            _commonTab.removeClass('active');
            _tabPane.removeClass('show active');
            $('.common-tab .nav li a[href^="#tab-update"]').addClass('active');
            $('.tab-pane#tab-update').addClass('show active');
            _footerItem.removeClass('active');
            $('.footer-nav li a[href^="#tab-update"]').addClass('active');
            _anim();
        }
    });

    // Preloader js
    function loader(_success) {
        var obj = $('.o-preloader'),
            inner = $('.o-preloader_inner');
        var w = 0,
            t = setInterval(function () {
                w = w + 1;
                inner.text(w + '%');
                if (w === 100) {
                    obj.addClass('open-page');
                    obj.addClass('hide-loader');

                    clearInterval(t);
                    w = 0;
                    if (_success) {
                        return _success();
                    }
                }
            }, 20);
    }
    loader();


}(jQuery));
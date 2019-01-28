(function($) {
    "use strict"
    $(function() {
        $('.events__list').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1500,
            responsive: [
                {
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        arrows: false
                    }
                }
            ]
        })
        $('.slider4__list').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1500,
            responsive: [
                {
                    breakpoint: 1530,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 900,
                    settings: {
                        slidesToShow: 2,
                        arrows: false
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        arrows: false
                    }
                }
            ]
        })
        $('.modal__slider__items').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplaySpeed: 1500,
            responsive: [
                {
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                        autoplay: true
                    }
                }
            ]
        })
    })
    $('.chome-on__modal__pslider').slick({
        slidesToShow: 1,
        slidesToScroll: 1
    })
    $('.chome-on__modal__pslider').on('setPosition', function(e, slick) {
        $('.chome-on__modal__nav').html('<span>0' + (slick.currentSlide + 1) + '</span>/0' + slick.slideCount);
    })
})(jQuery);
$('form').parsley();

var phoneInputs = document.getElementsByClassName('phone--musk');

if(phoneInputs.length) {
    for(var i = 0; i < phoneInputs.length; i++) {
        new IMask(
            phoneInputs[i], {
            mask: '+{7}(900)000-00-00'
        });
    }
}
(function($) {
    "use strict"
    $(function() {
        $('.home-slider-item').click(function() {
            var src = $(this).children('img').attr('src')
            var img = $('.home-slider-main')
            var current_src = img.attr('src')
            if(src != current_src) {
                img.fadeOut('fast', function() {
                    img.attr('src', src);
                    img.fadeIn('fast');
            })
            }
        })
    })
})(jQuery);
var map;
        function initMap() {
          map = new google.maps.Map(document.getElementById('map'), {
            center: new google.maps.LatLng(52.947551, 36.026567),
            zoom: 15,
            disableDefaultUI: true,
            styles: [
                {
                    "featureType": "all",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "visibility": "on"
                        }
                    ]
                },
                {
                    "featureType": "all",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "saturation": 36
                        },
                        {
                            "color": "#000000"
                        },
                        {
                            "lightness": 40
                        }
                    ]
                },
                {
                    "featureType": "all",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#000000"
                        },
                        {
                            "lightness": 16
                        }
                    ]
                },
                {
                    "featureType": "all",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#000000"
                        },
                        {
                            "lightness": 20
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#000000"
                        },
                        {
                            "lightness": 17
                        },
                        {
                            "weight": 1.2
                        }
                    ]
                },
                {
                    "featureType": "administrative.country",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#e5c163"
                        }
                    ]
                },
                {
                    "featureType": "administrative.locality",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#c4c4c4"
                        }
                    ]
                },
                {
                    "featureType": "administrative.neighborhood",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#e5c163"
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#000000"
                        },
                        {
                            "lightness": 20
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#000000"
                        },
                        {
                            "lightness": 21
                        },
                        {
                            "visibility": "on"
                        }
                    ]
                },
                {
                    "featureType": "poi.business",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "visibility": "on"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#e5c163"
                        },
                        {
                            "lightness": "0"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "color": "#e5c163"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#000000"
                        },
                        {
                            "lightness": 18
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#575757"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "color": "#2c2c2c"
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#000000"
                        },
                        {
                            "lightness": 16
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#999999"
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#000000"
                        },
                        {
                            "lightness": 19
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#000000"
                        },
                        {
                            "lightness": 17
                        }
                    ]
                }
            ]
          });
          var icon = 'http://frontend.dorohovdesign.ru/vekwood/img/marker.png';

            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(52.947551, 36.026567),
                icon: icon,
                map: map
            });
        }
(function($) {
    "use strict"
    $(function() {
        
        let userScroll = $(window).scrollTop()
        fixedNavbar()

        $(document).scroll(function(e) {
            userScroll = $(document).scrollTop()
            fixedNavbar()
        })

        function fixedNavbar() {
            const   navbar = $('.navbar'),
                    classes = {
                        fixed: 'is--fixed',
                        opacity: 'is--opacity',
                        opacity_trigger: 't--opacity'
                    }

            if(userScroll > navbar.outerHeight() && !navbar.hasClass(classes.fixed)) {
                navbar.addClass(classes.fixed)
                $('.__noslider').css('padding-top', navbar.outerHeight() + 'px')
                navbar.removeClass(classes.opacity)
            }
            if(userScroll < navbar.outerHeight()) {
                navbar.removeClass(classes.fixed)
                $('body').css('padding-top', 0)
                if(navbar.hasClass(classes.opacity_trigger))
                    navbar.addClass(classes.opacity)
            }
        }

        $('.navbar__mobile--btn').on('click', function() {
            toggleMobileMenu()
        })

        function toggleMobileMenu() {
            
            const   navbar = $('.navbar'),
                    button = $('.navbar__mobile--btn button.hamburger'),
                    classes = {
                        open: 'is--open',
                        active_hum: 'is-active'
                    }

            if(navbar.hasClass(classes.open)) {
                navbar.removeClass(classes.open)
                button.removeClass(classes.active_hum)
            }else {
                navbar.addClass(classes.open)
                button.addClass(classes.active_hum)
            }

        }
    })
})(jQuery);
// $('body').addClass('page-loading');
// console.log('page loading added class');

// $(window).on('load', function() {
//     $('body').removeClass('page-loading');
//     $('.preloader').remove();
// });

var preload = true;

var preloadOut = setInterval(function() {
    if(preload) {
        $('#preload').css('width', '+=100px');
    }else {
        clearInterval(preloadOut)
    }
}, 700);

$(window).on('load', function() {
    $('img').css('visibility', 'visible')
    $('.slider__item__img').css('visibility', 'visible')
    console.log('СТРАНИЦА ЗАГРУЖЕНА')
    setTimeout(function() {
        $('#preload').css('width', '100%');
    }, 1000)
    setTimeout(function() {
        preload = false;
        $('.preloader').remove();
    }, 2000)
});
$(document).ready(function() {
    $('#slider-range').slider({
        range: true,
        min: 0,
        max: 1000000,
        values: [ 0, 1000000 ],
        slide: function(e, ui) {
            $('#slider-range-min').html($('#slider-range').slider("values", 0) + " Р");
            $('#slider-range-max').html($('#slider-range').slider("values", 1) + " Р");
        }
    });
});
(function($) {
    "use strict"
    $(function() {
        var classes = {
            num_item: ".slider__nav--btn"
        },
        itemActiveId = $('.slider__nav--btn.is--active').attr('data-slider-item-id')

        openElement()

        $(classes.num_item).on('click', function() {
            itemActiveId = $(this).attr('data-slider-item-id')
            openElement()
            $(classes.num_item).removeClass('is--active')
            $(this).addClass('is--active')
        })

        function openElement() {

            if(!itemActiveId) itemActiveId = 1

                $('.slider__item').hide()
                $('.slider__item[data-slider-item-id="' + itemActiveId + '"]').fadeIn(1000)
        }

        $('.slider__down').click(function() {
            $('html, body').animate({scrollTop: $('.slider').outerHeight()}, 800)
        });
    })
})(jQuery);
var tag = document.createElement('script')
tag.src = "https://www.youtube.com/iframe_api";
        
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player,
videoID = 'M7lc1UVf-VE';
function onYouTubeIframeAPIReady() {
    player = new YT.Player('__in_video__player', {
        height: '360',
        width: '640',
        videoId: videoID,
        events: {
            'onReady': '',
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady() {
    __in_video__player.style.display = 'block';
    player.playVideo();
}

var done = false;
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 6000);
    done = true;
    }
}
function stopVideo() {
    player.stopVideo();
}

var buttons = document.getElementsByClassName('in-video__controls-play');

for(var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        var video = this.getAttribute('data-videoid');
        if(video) {
            player.loadVideoById(video);
            __in_video__player.style.display = 'block';
            document.querySelector('.in-video__cover').style.display = 'none';
            document.querySelector('.in-video__controls').style.display = 'none';
            player.playVideo();
            document.getElementsByClassName('in-video__bottom')[0].classList.add('is--active');
        }
    }, false);
}

(function($) {
    "use strict"
    $(function() {
        
        $('.anchor-target').click(function() {
            var anchorId = $(this).attr('data-anchorid')
            $('html, body').animate({scrollTop: $(".anchor-elem[data-anchorid=" + anchorId + "]").offset().top - $('.navbar').outerHeight()}, 800)
            console.log($(".anchor-elem[data-anchorid=" + anchorId + "]").scrollTop())
        });
    })
})(jQuery);
(function($) {
    "use strict"
    $(function() {
        if($('#svg-home').length) {
            var home = new Vivus('svg-home', {
                type: 'scenario',
                animTimingFunction: Vivus.EASE,
                onReady: function() {
                    console.log('onReady')
                },
            }, function() {
                $('.drawing__hand').hide();
            });
        }
    })
})(jQuery);
(function($) {
    "use strict"
    $(function() {
        $('.modal-target[data-modalid]').on('click', function() {
            if($(this).attr('data-modalid') == 'slider') {
                $('.modal__slider__items').slick('slickNext')
            }
            var wind = $('.modal[data-modalid="' + $(this).attr('data-modalid') + '"]').show();
            $('body, html').addClass('is--modal')
        })

        $('.modal-overflow').on('click', function(e) {
            closeModal(e)
        })

        $('.modal-window-close').on('click', function(e) {
            closeModal(e)
        })

        function closeModal(e) {
            $(e.target).closest('.modal').hide();
            $('body, html').removeClass('is--modal')
        }
    })
})(jQuery);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50cy5qcyIsImZvcm1zLmpzIiwiaG9tZV9zbGlkZXIuanMiLCJtYXAuanMiLCJuYXZiYXIuanMiLCJwcmVsb2FkZXIuanMiLCJwcmljZXJhbmdlLmpzIiwic2xpZGVyLmpzIiwiWW91VHViZV9wbGF5ZXIuanMiLCJfYW5jaG9yLmpzIiwiX2RyYXdpbmcuanMiLCJfbW9kYWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDclJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJCgnLmV2ZW50c19fbGlzdCcpLnNsaWNrKHtcclxuICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICBhdXRvcGxheVNwZWVkOiAxNTAwLFxyXG4gICAgICAgICAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTAyNSxcclxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcclxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9KVxyXG4gICAgICAgICQoJy5zbGlkZXI0X19saXN0Jykuc2xpY2soe1xyXG4gICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgIGF1dG9wbGF5U3BlZWQ6IDE1MDAsXHJcbiAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxNTMwLFxyXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogM1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogOTAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY4LFxyXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgJCgnLm1vZGFsX19zbGlkZXJfX2l0ZW1zJykuc2xpY2soe1xyXG4gICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgICAgYXV0b3BsYXlTcGVlZDogMTUwMCxcclxuICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEwMjUsXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjgsXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvcGxheTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG4gICAgJCgnLmNob21lLW9uX19tb2RhbF9fcHNsaWRlcicpLnNsaWNrKHtcclxuICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcclxuICAgIH0pXHJcbiAgICAkKCcuY2hvbWUtb25fX21vZGFsX19wc2xpZGVyJykub24oJ3NldFBvc2l0aW9uJywgZnVuY3Rpb24oZSwgc2xpY2spIHtcclxuICAgICAgICAkKCcuY2hvbWUtb25fX21vZGFsX19uYXYnKS5odG1sKCc8c3Bhbj4wJyArIChzbGljay5jdXJyZW50U2xpZGUgKyAxKSArICc8L3NwYW4+LzAnICsgc2xpY2suc2xpZGVDb3VudCk7XHJcbiAgICB9KVxyXG59KShqUXVlcnkpOyIsIiQoJ2Zvcm0nKS5wYXJzbGV5KCk7XHJcblxyXG52YXIgcGhvbmVJbnB1dHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwaG9uZS0tbXVzaycpO1xyXG5cclxuaWYocGhvbmVJbnB1dHMubGVuZ3RoKSB7XHJcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgcGhvbmVJbnB1dHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBuZXcgSU1hc2soXHJcbiAgICAgICAgICAgIHBob25lSW5wdXRzW2ldLCB7XHJcbiAgICAgICAgICAgIG1hc2s6ICcrezd9KDkwMCkwMDAtMDAtMDAnXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iLCIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJCgnLmhvbWUtc2xpZGVyLWl0ZW0nKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdmFyIHNyYyA9ICQodGhpcykuY2hpbGRyZW4oJ2ltZycpLmF0dHIoJ3NyYycpXHJcbiAgICAgICAgICAgIHZhciBpbWcgPSAkKCcuaG9tZS1zbGlkZXItbWFpbicpXHJcbiAgICAgICAgICAgIHZhciBjdXJyZW50X3NyYyA9IGltZy5hdHRyKCdzcmMnKVxyXG4gICAgICAgICAgICBpZihzcmMgIT0gY3VycmVudF9zcmMpIHtcclxuICAgICAgICAgICAgICAgIGltZy5mYWRlT3V0KCdmYXN0JywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1nLmF0dHIoJ3NyYycsIHNyYyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1nLmZhZGVJbignZmFzdCcpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7IiwidmFyIG1hcDtcclxuICAgICAgICBmdW5jdGlvbiBpbml0TWFwKCkge1xyXG4gICAgICAgICAgbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwJyksIHtcclxuICAgICAgICAgICAgY2VudGVyOiBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKDUyLjk0NzU1MSwgMzYuMDI2NTY3KSxcclxuICAgICAgICAgICAgem9vbTogMTUsXHJcbiAgICAgICAgICAgIGRpc2FibGVEZWZhdWx0VUk6IHRydWUsXHJcbiAgICAgICAgICAgIHN0eWxlczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJhbGxcIixcclxuICAgICAgICAgICAgICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2aXNpYmlsaXR5XCI6IFwib25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwiYWxsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVscy50ZXh0LmZpbGxcIixcclxuICAgICAgICAgICAgICAgICAgICBcInN0eWxlcnNcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNhdHVyYXRpb25cIjogMzZcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcIiMwMDAwMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxpZ2h0bmVzc1wiOiA0MFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwiYWxsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVscy50ZXh0LnN0cm9rZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmlzaWJpbGl0eVwiOiBcIm9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcIiMwMDAwMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxpZ2h0bmVzc1wiOiAxNlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwiYWxsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVscy5pY29uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2aXNpYmlsaXR5XCI6IFwib2ZmXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcImFkbWluaXN0cmF0aXZlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5LmZpbGxcIixcclxuICAgICAgICAgICAgICAgICAgICBcInN0eWxlcnNcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwiIzAwMDAwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGlnaHRuZXNzXCI6IDIwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJhZG1pbmlzdHJhdGl2ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeS5zdHJva2VcIixcclxuICAgICAgICAgICAgICAgICAgICBcInN0eWxlcnNcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwiIzAwMDAwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGlnaHRuZXNzXCI6IDE3XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2VpZ2h0XCI6IDEuMlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwiYWRtaW5pc3RyYXRpdmUuY291bnRyeVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMudGV4dC5maWxsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcIiNlNWMxNjNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwiYWRtaW5pc3RyYXRpdmUubG9jYWxpdHlcIixcclxuICAgICAgICAgICAgICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzLnRleHQuZmlsbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCIjYzRjNGM0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcImFkbWluaXN0cmF0aXZlLm5laWdoYm9yaG9vZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMudGV4dC5maWxsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcIiNlNWMxNjNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwibGFuZHNjYXBlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcIiMwMDAwMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxpZ2h0bmVzc1wiOiAyMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwicG9pXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcIiMwMDAwMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxpZ2h0bmVzc1wiOiAyMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZpc2liaWxpdHlcIjogXCJvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJwb2kuYnVzaW5lc3NcIixcclxuICAgICAgICAgICAgICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnlcIixcclxuICAgICAgICAgICAgICAgICAgICBcInN0eWxlcnNcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZpc2liaWxpdHlcIjogXCJvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkLmhpZ2h3YXlcIixcclxuICAgICAgICAgICAgICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnkuZmlsbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCIjZTVjMTYzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsaWdodG5lc3NcIjogXCIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWQuaGlnaHdheVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeS5zdHJva2VcIixcclxuICAgICAgICAgICAgICAgICAgICBcInN0eWxlcnNcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZpc2liaWxpdHlcIjogXCJvZmZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZC5oaWdod2F5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVscy50ZXh0LmZpbGxcIixcclxuICAgICAgICAgICAgICAgICAgICBcInN0eWxlcnNcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkLmhpZ2h3YXlcIixcclxuICAgICAgICAgICAgICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzLnRleHQuc3Ryb2tlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcIiNlNWMxNjNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZC5hcnRlcmlhbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCIjMDAwMDAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsaWdodG5lc3NcIjogMThcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWQuYXJ0ZXJpYWxcIixcclxuICAgICAgICAgICAgICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnkuZmlsbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCIjNTc1NzU3XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWQuYXJ0ZXJpYWxcIixcclxuICAgICAgICAgICAgICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzLnRleHQuZmlsbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWQuYXJ0ZXJpYWxcIixcclxuICAgICAgICAgICAgICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzLnRleHQuc3Ryb2tlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcIiMyYzJjMmNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZC5sb2NhbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCIjMDAwMDAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsaWdodG5lc3NcIjogMTZcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWQubG9jYWxcIixcclxuICAgICAgICAgICAgICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzLnRleHQuZmlsbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCIjOTk5OTk5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInRyYW5zaXRcIixcclxuICAgICAgICAgICAgICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnlcIixcclxuICAgICAgICAgICAgICAgICAgICBcInN0eWxlcnNcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwiIzAwMDAwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGlnaHRuZXNzXCI6IDE5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJ3YXRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCIjMDAwMDAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsaWdodG5lc3NcIjogMTdcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICB2YXIgaWNvbiA9ICdodHRwOi8vZnJvbnRlbmQuZG9yb2hvdmRlc2lnbi5ydS92ZWt3b29kL2ltZy9tYXJrZXIucG5nJztcclxuXHJcbiAgICAgICAgICAgIHZhciBtYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKDUyLjk0NzU1MSwgMzYuMDI2NTY3KSxcclxuICAgICAgICAgICAgICAgIGljb246IGljb24sXHJcbiAgICAgICAgICAgICAgICBtYXA6IG1hcFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IiwiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCB1c2VyU2Nyb2xsID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpXHJcbiAgICAgICAgZml4ZWROYXZiYXIoKVxyXG5cclxuICAgICAgICAkKGRvY3VtZW50KS5zY3JvbGwoZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICB1c2VyU2Nyb2xsID0gJChkb2N1bWVudCkuc2Nyb2xsVG9wKClcclxuICAgICAgICAgICAgZml4ZWROYXZiYXIoKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGZpeGVkTmF2YmFyKCkge1xyXG4gICAgICAgICAgICBjb25zdCAgIG5hdmJhciA9ICQoJy5uYXZiYXInKSxcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc2VzID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaXhlZDogJ2lzLS1maXhlZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6ICdpcy0tb3BhY2l0eScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHlfdHJpZ2dlcjogJ3QtLW9wYWNpdHknXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYodXNlclNjcm9sbCA+IG5hdmJhci5vdXRlckhlaWdodCgpICYmICFuYXZiYXIuaGFzQ2xhc3MoY2xhc3Nlcy5maXhlZCkpIHtcclxuICAgICAgICAgICAgICAgIG5hdmJhci5hZGRDbGFzcyhjbGFzc2VzLmZpeGVkKVxyXG4gICAgICAgICAgICAgICAgJCgnLl9fbm9zbGlkZXInKS5jc3MoJ3BhZGRpbmctdG9wJywgbmF2YmFyLm91dGVySGVpZ2h0KCkgKyAncHgnKVxyXG4gICAgICAgICAgICAgICAgbmF2YmFyLnJlbW92ZUNsYXNzKGNsYXNzZXMub3BhY2l0eSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZih1c2VyU2Nyb2xsIDwgbmF2YmFyLm91dGVySGVpZ2h0KCkpIHtcclxuICAgICAgICAgICAgICAgIG5hdmJhci5yZW1vdmVDbGFzcyhjbGFzc2VzLmZpeGVkKVxyXG4gICAgICAgICAgICAgICAgJCgnYm9keScpLmNzcygncGFkZGluZy10b3AnLCAwKVxyXG4gICAgICAgICAgICAgICAgaWYobmF2YmFyLmhhc0NsYXNzKGNsYXNzZXMub3BhY2l0eV90cmlnZ2VyKSlcclxuICAgICAgICAgICAgICAgICAgICBuYXZiYXIuYWRkQ2xhc3MoY2xhc3Nlcy5vcGFjaXR5KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKCcubmF2YmFyX19tb2JpbGUtLWJ0bicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB0b2dnbGVNb2JpbGVNZW51KClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBmdW5jdGlvbiB0b2dnbGVNb2JpbGVNZW51KCkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgICBuYXZiYXIgPSAkKCcubmF2YmFyJyksXHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uID0gJCgnLm5hdmJhcl9fbW9iaWxlLS1idG4gYnV0dG9uLmhhbWJ1cmdlcicpLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzZXMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZW46ICdpcy0tb3BlbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZV9odW06ICdpcy1hY3RpdmUnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYobmF2YmFyLmhhc0NsYXNzKGNsYXNzZXMub3BlbikpIHtcclxuICAgICAgICAgICAgICAgIG5hdmJhci5yZW1vdmVDbGFzcyhjbGFzc2VzLm9wZW4pXHJcbiAgICAgICAgICAgICAgICBidXR0b24ucmVtb3ZlQ2xhc3MoY2xhc3Nlcy5hY3RpdmVfaHVtKVxyXG4gICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBuYXZiYXIuYWRkQ2xhc3MoY2xhc3Nlcy5vcGVuKVxyXG4gICAgICAgICAgICAgICAgYnV0dG9uLmFkZENsYXNzKGNsYXNzZXMuYWN0aXZlX2h1bSlcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59KShqUXVlcnkpOyIsIi8vICQoJ2JvZHknKS5hZGRDbGFzcygncGFnZS1sb2FkaW5nJyk7XHJcbi8vIGNvbnNvbGUubG9nKCdwYWdlIGxvYWRpbmcgYWRkZWQgY2xhc3MnKTtcclxuXHJcbi8vICQod2luZG93KS5vbignbG9hZCcsIGZ1bmN0aW9uKCkge1xyXG4vLyAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdwYWdlLWxvYWRpbmcnKTtcclxuLy8gICAgICQoJy5wcmVsb2FkZXInKS5yZW1vdmUoKTtcclxuLy8gfSk7XHJcblxyXG52YXIgcHJlbG9hZCA9IHRydWU7XHJcblxyXG52YXIgcHJlbG9hZE91dCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xyXG4gICAgaWYocHJlbG9hZCkge1xyXG4gICAgICAgICQoJyNwcmVsb2FkJykuY3NzKCd3aWR0aCcsICcrPTEwMHB4Jyk7XHJcbiAgICB9ZWxzZSB7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbChwcmVsb2FkT3V0KVxyXG4gICAgfVxyXG59LCA3MDApO1xyXG5cclxuJCh3aW5kb3cpLm9uKCdsb2FkJywgZnVuY3Rpb24oKSB7XHJcbiAgICAkKCdpbWcnKS5jc3MoJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpXHJcbiAgICAkKCcuc2xpZGVyX19pdGVtX19pbWcnKS5jc3MoJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpXHJcbiAgICBjb25zb2xlLmxvZygn0KHQotCg0JDQndCY0KbQkCDQl9CQ0JPQoNCj0JbQldCd0JAnKVxyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAkKCcjcHJlbG9hZCcpLmNzcygnd2lkdGgnLCAnMTAwJScpO1xyXG4gICAgfSwgMTAwMClcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcHJlbG9hZCA9IGZhbHNlO1xyXG4gICAgICAgICQoJy5wcmVsb2FkZXInKS5yZW1vdmUoKTtcclxuICAgIH0sIDIwMDApXHJcbn0pOyIsIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAgJCgnI3NsaWRlci1yYW5nZScpLnNsaWRlcih7XHJcbiAgICAgICAgcmFuZ2U6IHRydWUsXHJcbiAgICAgICAgbWluOiAwLFxyXG4gICAgICAgIG1heDogMTAwMDAwMCxcclxuICAgICAgICB2YWx1ZXM6IFsgMCwgMTAwMDAwMCBdLFxyXG4gICAgICAgIHNsaWRlOiBmdW5jdGlvbihlLCB1aSkge1xyXG4gICAgICAgICAgICAkKCcjc2xpZGVyLXJhbmdlLW1pbicpLmh0bWwoJCgnI3NsaWRlci1yYW5nZScpLnNsaWRlcihcInZhbHVlc1wiLCAwKSArIFwiINCgXCIpO1xyXG4gICAgICAgICAgICAkKCcjc2xpZGVyLXJhbmdlLW1heCcpLmh0bWwoJCgnI3NsaWRlci1yYW5nZScpLnNsaWRlcihcInZhbHVlc1wiLCAxKSArIFwiINCgXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTsiLCIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIGNsYXNzZXMgPSB7XHJcbiAgICAgICAgICAgIG51bV9pdGVtOiBcIi5zbGlkZXJfX25hdi0tYnRuXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIGl0ZW1BY3RpdmVJZCA9ICQoJy5zbGlkZXJfX25hdi0tYnRuLmlzLS1hY3RpdmUnKS5hdHRyKCdkYXRhLXNsaWRlci1pdGVtLWlkJylcclxuXHJcbiAgICAgICAgb3BlbkVsZW1lbnQoKVxyXG5cclxuICAgICAgICAkKGNsYXNzZXMubnVtX2l0ZW0pLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBpdGVtQWN0aXZlSWQgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtc2xpZGVyLWl0ZW0taWQnKVxyXG4gICAgICAgICAgICBvcGVuRWxlbWVudCgpXHJcbiAgICAgICAgICAgICQoY2xhc3Nlcy5udW1faXRlbSkucmVtb3ZlQ2xhc3MoJ2lzLS1hY3RpdmUnKVxyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdpcy0tYWN0aXZlJylcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBvcGVuRWxlbWVudCgpIHtcclxuXHJcbiAgICAgICAgICAgIGlmKCFpdGVtQWN0aXZlSWQpIGl0ZW1BY3RpdmVJZCA9IDFcclxuXHJcbiAgICAgICAgICAgICAgICAkKCcuc2xpZGVyX19pdGVtJykuaGlkZSgpXHJcbiAgICAgICAgICAgICAgICAkKCcuc2xpZGVyX19pdGVtW2RhdGEtc2xpZGVyLWl0ZW0taWQ9XCInICsgaXRlbUFjdGl2ZUlkICsgJ1wiXScpLmZhZGVJbigxMDAwKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJCgnLnNsaWRlcl9fZG93bicpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiAkKCcuc2xpZGVyJykub3V0ZXJIZWlnaHQoKX0sIDgwMClcclxuICAgICAgICB9KTtcclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7IiwidmFyIHRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpXHJcbnRhZy5zcmMgPSBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2lmcmFtZV9hcGlcIjtcclxuICAgICAgICBcclxudmFyIGZpcnN0U2NyaXB0VGFnID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpWzBdO1xyXG5maXJzdFNjcmlwdFRhZy5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0YWcsIGZpcnN0U2NyaXB0VGFnKTtcclxuXHJcbnZhciBwbGF5ZXIsXHJcbnZpZGVvSUQgPSAnTTdsYzFVVmYtVkUnO1xyXG5mdW5jdGlvbiBvbllvdVR1YmVJZnJhbWVBUElSZWFkeSgpIHtcclxuICAgIHBsYXllciA9IG5ldyBZVC5QbGF5ZXIoJ19faW5fdmlkZW9fX3BsYXllcicsIHtcclxuICAgICAgICBoZWlnaHQ6ICczNjAnLFxyXG4gICAgICAgIHdpZHRoOiAnNjQwJyxcclxuICAgICAgICB2aWRlb0lkOiB2aWRlb0lELFxyXG4gICAgICAgIGV2ZW50czoge1xyXG4gICAgICAgICAgICAnb25SZWFkeSc6ICcnLFxyXG4gICAgICAgICAgICAnb25TdGF0ZUNoYW5nZSc6IG9uUGxheWVyU3RhdGVDaGFuZ2VcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gb25QbGF5ZXJSZWFkeSgpIHtcclxuICAgIF9faW5fdmlkZW9fX3BsYXllci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIHBsYXllci5wbGF5VmlkZW8oKTtcclxufVxyXG5cclxudmFyIGRvbmUgPSBmYWxzZTtcclxuZnVuY3Rpb24gb25QbGF5ZXJTdGF0ZUNoYW5nZShldmVudCkge1xyXG4gICAgaWYgKGV2ZW50LmRhdGEgPT0gWVQuUGxheWVyU3RhdGUuUExBWUlORyAmJiAhZG9uZSkge1xyXG4gICAgc2V0VGltZW91dChzdG9wVmlkZW8sIDYwMDApO1xyXG4gICAgZG9uZSA9IHRydWU7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gc3RvcFZpZGVvKCkge1xyXG4gICAgcGxheWVyLnN0b3BWaWRlbygpO1xyXG59XHJcblxyXG52YXIgYnV0dG9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2luLXZpZGVvX19jb250cm9scy1wbGF5Jyk7XHJcblxyXG5mb3IodmFyIGkgPSAwOyBpIDwgYnV0dG9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgYnV0dG9uc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciB2aWRlbyA9IHRoaXMuZ2V0QXR0cmlidXRlKCdkYXRhLXZpZGVvaWQnKTtcclxuICAgICAgICBpZih2aWRlbykge1xyXG4gICAgICAgICAgICBwbGF5ZXIubG9hZFZpZGVvQnlJZCh2aWRlbyk7XHJcbiAgICAgICAgICAgIF9faW5fdmlkZW9fX3BsYXllci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluLXZpZGVvX19jb3ZlcicpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbi12aWRlb19fY29udHJvbHMnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICBwbGF5ZXIucGxheVZpZGVvKCk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2luLXZpZGVvX19ib3R0b20nKVswXS5jbGFzc0xpc3QuYWRkKCdpcy0tYWN0aXZlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgZmFsc2UpO1xyXG59XHJcbiIsIihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuICAgICAgICBcclxuICAgICAgICAkKCcuYW5jaG9yLXRhcmdldCcpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB2YXIgYW5jaG9ySWQgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtYW5jaG9yaWQnKVxyXG4gICAgICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiAkKFwiLmFuY2hvci1lbGVtW2RhdGEtYW5jaG9yaWQ9XCIgKyBhbmNob3JJZCArIFwiXVwiKS5vZmZzZXQoKS50b3AgLSAkKCcubmF2YmFyJykub3V0ZXJIZWlnaHQoKX0sIDgwMClcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJChcIi5hbmNob3ItZWxlbVtkYXRhLWFuY2hvcmlkPVwiICsgYW5jaG9ySWQgKyBcIl1cIikuc2Nyb2xsVG9wKCkpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KVxyXG59KShqUXVlcnkpOyIsIihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuICAgICAgICBpZigkKCcjc3ZnLWhvbWUnKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdmFyIGhvbWUgPSBuZXcgVml2dXMoJ3N2Zy1ob21lJywge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogJ3NjZW5hcmlvJyxcclxuICAgICAgICAgICAgICAgIGFuaW1UaW1pbmdGdW5jdGlvbjogVml2dXMuRUFTRSxcclxuICAgICAgICAgICAgICAgIG9uUmVhZHk6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdvblJlYWR5JylcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgJCgnLmRyYXdpbmdfX2hhbmQnKS5oaWRlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICQoJy5tb2RhbC10YXJnZXRbZGF0YS1tb2RhbGlkXScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBpZigkKHRoaXMpLmF0dHIoJ2RhdGEtbW9kYWxpZCcpID09ICdzbGlkZXInKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcubW9kYWxfX3NsaWRlcl9faXRlbXMnKS5zbGljaygnc2xpY2tOZXh0JylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgd2luZCA9ICQoJy5tb2RhbFtkYXRhLW1vZGFsaWQ9XCInICsgJCh0aGlzKS5hdHRyKCdkYXRhLW1vZGFsaWQnKSArICdcIl0nKS5zaG93KCk7XHJcbiAgICAgICAgICAgICQoJ2JvZHksIGh0bWwnKS5hZGRDbGFzcygnaXMtLW1vZGFsJylcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKCcubW9kYWwtb3ZlcmZsb3cnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIGNsb3NlTW9kYWwoZSlcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKCcubW9kYWwtd2luZG93LWNsb3NlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICBjbG9zZU1vZGFsKGUpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gY2xvc2VNb2RhbChlKSB7XHJcbiAgICAgICAgICAgICQoZS50YXJnZXQpLmNsb3Nlc3QoJy5tb2RhbCcpLmhpZGUoKTtcclxuICAgICAgICAgICAgJCgnYm9keSwgaHRtbCcpLnJlbW92ZUNsYXNzKCdpcy0tbW9kYWwnKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7Il19

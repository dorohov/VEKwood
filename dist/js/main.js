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
    })
})(jQuery);
$('form').parsley();

if(document.getElementById('b_phone')) {
    var bigFormPhoneMask = new IMask(
    document.getElementById('b_phone'), {
        mask: '+{7}(000)000-00-00'
    });
}

if(document.getElementById('in_phone')) {
    var indexFormPhoneMask = new IMask(
    document.getElementById('in_phone'), {
        mask: '+{7}(000)000-00-00'
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
                $('body').css('padding-top', navbar.outerHeight() + 'px')
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
            if(itemActiveId) {
                $('.slider__item').hide()
                $('.slider__item[data-slider-item-id="' + itemActiveId + '"]').fadeIn()
            }
        }

        $('.slider__down').click(function() {
            $('html, body').animate({scrollTop: $('.slider').outerHeight()}, 800)
        });
    })
})(jQuery);
/*
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
*/
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50cy5qcyIsImZvcm1zLmpzIiwibmF2YmFyLmpzIiwic2xpZGVyLmpzIiwiWW91VHViZV9wbGF5ZXIuanMiLCJfZHJhd2luZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3BEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICQoJy5ldmVudHNfX2xpc3QnKS5zbGljayh7XHJcbiAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgYXV0b3BsYXlTcGVlZDogMTUwMCxcclxuICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEwMjUsXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjgsXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7IiwiJCgnZm9ybScpLnBhcnNsZXkoKTtcclxuXHJcbmlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiX3Bob25lJykpIHtcclxuICAgIHZhciBiaWdGb3JtUGhvbmVNYXNrID0gbmV3IElNYXNrKFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JfcGhvbmUnKSwge1xyXG4gICAgICAgIG1hc2s6ICcrezd9KDAwMCkwMDAtMDAtMDAnXHJcbiAgICB9KTtcclxufVxyXG5cclxuaWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luX3Bob25lJykpIHtcclxuICAgIHZhciBpbmRleEZvcm1QaG9uZU1hc2sgPSBuZXcgSU1hc2soXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5fcGhvbmUnKSwge1xyXG4gICAgICAgIG1hc2s6ICcrezd9KDAwMCkwMDAtMDAtMDAnXHJcbiAgICB9KTtcclxufSIsIihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgdXNlclNjcm9sbCA9ICQod2luZG93KS5zY3JvbGxUb3AoKVxyXG4gICAgICAgIGZpeGVkTmF2YmFyKClcclxuXHJcbiAgICAgICAgJChkb2N1bWVudCkuc2Nyb2xsKGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgdXNlclNjcm9sbCA9ICQoZG9jdW1lbnQpLnNjcm9sbFRvcCgpXHJcbiAgICAgICAgICAgIGZpeGVkTmF2YmFyKClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBmaXhlZE5hdmJhcigpIHtcclxuICAgICAgICAgICAgY29uc3QgICBuYXZiYXIgPSAkKCcubmF2YmFyJyksXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NlcyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZml4ZWQ6ICdpcy0tZml4ZWQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAnaXMtLW9wYWNpdHknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5X3RyaWdnZXI6ICd0LS1vcGFjaXR5J1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKHVzZXJTY3JvbGwgPiBuYXZiYXIub3V0ZXJIZWlnaHQoKSAmJiAhbmF2YmFyLmhhc0NsYXNzKGNsYXNzZXMuZml4ZWQpKSB7XHJcbiAgICAgICAgICAgICAgICBuYXZiYXIuYWRkQ2xhc3MoY2xhc3Nlcy5maXhlZClcclxuICAgICAgICAgICAgICAgICQoJ2JvZHknKS5jc3MoJ3BhZGRpbmctdG9wJywgbmF2YmFyLm91dGVySGVpZ2h0KCkgKyAncHgnKVxyXG4gICAgICAgICAgICAgICAgbmF2YmFyLnJlbW92ZUNsYXNzKGNsYXNzZXMub3BhY2l0eSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZih1c2VyU2Nyb2xsIDwgbmF2YmFyLm91dGVySGVpZ2h0KCkpIHtcclxuICAgICAgICAgICAgICAgIG5hdmJhci5yZW1vdmVDbGFzcyhjbGFzc2VzLmZpeGVkKVxyXG4gICAgICAgICAgICAgICAgJCgnYm9keScpLmNzcygncGFkZGluZy10b3AnLCAwKVxyXG4gICAgICAgICAgICAgICAgaWYobmF2YmFyLmhhc0NsYXNzKGNsYXNzZXMub3BhY2l0eV90cmlnZ2VyKSlcclxuICAgICAgICAgICAgICAgICAgICBuYXZiYXIuYWRkQ2xhc3MoY2xhc3Nlcy5vcGFjaXR5KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKCcubmF2YmFyX19tb2JpbGUtLWJ0bicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB0b2dnbGVNb2JpbGVNZW51KClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBmdW5jdGlvbiB0b2dnbGVNb2JpbGVNZW51KCkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgICBuYXZiYXIgPSAkKCcubmF2YmFyJyksXHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uID0gJCgnLm5hdmJhcl9fbW9iaWxlLS1idG4gYnV0dG9uLmhhbWJ1cmdlcicpLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzZXMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZW46ICdpcy0tb3BlbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZV9odW06ICdpcy1hY3RpdmUnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYobmF2YmFyLmhhc0NsYXNzKGNsYXNzZXMub3BlbikpIHtcclxuICAgICAgICAgICAgICAgIG5hdmJhci5yZW1vdmVDbGFzcyhjbGFzc2VzLm9wZW4pXHJcbiAgICAgICAgICAgICAgICBidXR0b24ucmVtb3ZlQ2xhc3MoY2xhc3Nlcy5hY3RpdmVfaHVtKVxyXG4gICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBuYXZiYXIuYWRkQ2xhc3MoY2xhc3Nlcy5vcGVuKVxyXG4gICAgICAgICAgICAgICAgYnV0dG9uLmFkZENsYXNzKGNsYXNzZXMuYWN0aXZlX2h1bSlcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59KShqUXVlcnkpOyIsIihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgY2xhc3NlcyA9IHtcclxuICAgICAgICAgICAgbnVtX2l0ZW06IFwiLnNsaWRlcl9fbmF2LS1idG5cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaXRlbUFjdGl2ZUlkID0gJCgnLnNsaWRlcl9fbmF2LS1idG4uaXMtLWFjdGl2ZScpLmF0dHIoJ2RhdGEtc2xpZGVyLWl0ZW0taWQnKVxyXG5cclxuICAgICAgICBvcGVuRWxlbWVudCgpXHJcblxyXG4gICAgICAgICQoY2xhc3Nlcy5udW1faXRlbSkub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGl0ZW1BY3RpdmVJZCA9ICQodGhpcykuYXR0cignZGF0YS1zbGlkZXItaXRlbS1pZCcpXHJcbiAgICAgICAgICAgIG9wZW5FbGVtZW50KClcclxuICAgICAgICAgICAgJChjbGFzc2VzLm51bV9pdGVtKS5yZW1vdmVDbGFzcygnaXMtLWFjdGl2ZScpXHJcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2lzLS1hY3RpdmUnKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIG9wZW5FbGVtZW50KCkge1xyXG4gICAgICAgICAgICBpZihpdGVtQWN0aXZlSWQpIHtcclxuICAgICAgICAgICAgICAgICQoJy5zbGlkZXJfX2l0ZW0nKS5oaWRlKClcclxuICAgICAgICAgICAgICAgICQoJy5zbGlkZXJfX2l0ZW1bZGF0YS1zbGlkZXItaXRlbS1pZD1cIicgKyBpdGVtQWN0aXZlSWQgKyAnXCJdJykuZmFkZUluKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJCgnLnNsaWRlcl9fZG93bicpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiAkKCcuc2xpZGVyJykub3V0ZXJIZWlnaHQoKX0sIDgwMClcclxuICAgICAgICB9KTtcclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7IiwiLypcclxudmFyIHRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpXHJcbnRhZy5zcmMgPSBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2lmcmFtZV9hcGlcIjtcclxuICAgICAgICBcclxudmFyIGZpcnN0U2NyaXB0VGFnID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpWzBdO1xyXG5maXJzdFNjcmlwdFRhZy5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0YWcsIGZpcnN0U2NyaXB0VGFnKTtcclxuXHJcbnZhciBwbGF5ZXIsXHJcbnZpZGVvSUQgPSAnTTdsYzFVVmYtVkUnO1xyXG5mdW5jdGlvbiBvbllvdVR1YmVJZnJhbWVBUElSZWFkeSgpIHtcclxuICAgIHBsYXllciA9IG5ldyBZVC5QbGF5ZXIoJ19faW5fdmlkZW9fX3BsYXllcicsIHtcclxuICAgICAgICBoZWlnaHQ6ICczNjAnLFxyXG4gICAgICAgIHdpZHRoOiAnNjQwJyxcclxuICAgICAgICB2aWRlb0lkOiB2aWRlb0lELFxyXG4gICAgICAgIGV2ZW50czoge1xyXG4gICAgICAgICAgICAnb25SZWFkeSc6ICcnLFxyXG4gICAgICAgICAgICAnb25TdGF0ZUNoYW5nZSc6IG9uUGxheWVyU3RhdGVDaGFuZ2VcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gb25QbGF5ZXJSZWFkeSgpIHtcclxuICAgIF9faW5fdmlkZW9fX3BsYXllci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIHBsYXllci5wbGF5VmlkZW8oKTtcclxufVxyXG5cclxudmFyIGRvbmUgPSBmYWxzZTtcclxuZnVuY3Rpb24gb25QbGF5ZXJTdGF0ZUNoYW5nZShldmVudCkge1xyXG4gICAgaWYgKGV2ZW50LmRhdGEgPT0gWVQuUGxheWVyU3RhdGUuUExBWUlORyAmJiAhZG9uZSkge1xyXG4gICAgc2V0VGltZW91dChzdG9wVmlkZW8sIDYwMDApO1xyXG4gICAgZG9uZSA9IHRydWU7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gc3RvcFZpZGVvKCkge1xyXG4gICAgcGxheWVyLnN0b3BWaWRlbygpO1xyXG59XHJcblxyXG52YXIgYnV0dG9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2luLXZpZGVvX19jb250cm9scy1wbGF5Jyk7XHJcblxyXG5mb3IodmFyIGkgPSAwOyBpIDwgYnV0dG9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgYnV0dG9uc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciB2aWRlbyA9IHRoaXMuZ2V0QXR0cmlidXRlKCdkYXRhLXZpZGVvaWQnKTtcclxuICAgICAgICBpZih2aWRlbykge1xyXG4gICAgICAgICAgICBwbGF5ZXIubG9hZFZpZGVvQnlJZCh2aWRlbyk7XHJcbiAgICAgICAgICAgIF9faW5fdmlkZW9fX3BsYXllci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluLXZpZGVvX19jb3ZlcicpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbi12aWRlb19fY29udHJvbHMnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICBwbGF5ZXIucGxheVZpZGVvKCk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2luLXZpZGVvX19ib3R0b20nKVswXS5jbGFzc0xpc3QuYWRkKCdpcy0tYWN0aXZlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgZmFsc2UpO1xyXG59XHJcbiovIiwiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmKCQoJyNzdmctaG9tZScpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB2YXIgaG9tZSA9IG5ldyBWaXZ1cygnc3ZnLWhvbWUnLCB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnc2NlbmFyaW8nLFxyXG4gICAgICAgICAgICAgICAgYW5pbVRpbWluZ0Z1bmN0aW9uOiBWaXZ1cy5FQVNFLFxyXG4gICAgICAgICAgICAgICAgb25SZWFkeTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ29uUmVhZHknKVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcuZHJhd2luZ19faGFuZCcpLmhpZGUoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiXX0=

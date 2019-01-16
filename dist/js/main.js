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
        var home = new Vivus('my-svg', {
            type: 'scenario',
            animTimingFunction: Vivus.EASE,
            onReady: function() {
                console.log('onReady')
            },
        }, function() {
            $('.drawing__hand').hide();
        });
    })
})(jQuery);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm1zLmpzIiwibmF2YmFyLmpzIiwic2xpZGVyLmpzIiwiWW91VHViZV9wbGF5ZXIuanMiLCJfZHJhd2luZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN4REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3BEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKCdmb3JtJykucGFyc2xleSgpO1xyXG5cclxuaWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JfcGhvbmUnKSkge1xyXG4gICAgdmFyIGJpZ0Zvcm1QaG9uZU1hc2sgPSBuZXcgSU1hc2soXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYl9waG9uZScpLCB7XHJcbiAgICAgICAgbWFzazogJyt7N30oMDAwKTAwMC0wMC0wMCdcclxuICAgIH0pO1xyXG59XHJcblxyXG5pZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5fcGhvbmUnKSkge1xyXG4gICAgdmFyIGluZGV4Rm9ybVBob25lTWFzayA9IG5ldyBJTWFzayhcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbl9waG9uZScpLCB7XHJcbiAgICAgICAgbWFzazogJyt7N30oMDAwKTAwMC0wMC0wMCdcclxuICAgIH0pO1xyXG59IiwiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCB1c2VyU2Nyb2xsID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpXHJcbiAgICAgICAgZml4ZWROYXZiYXIoKVxyXG5cclxuICAgICAgICAkKGRvY3VtZW50KS5zY3JvbGwoZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICB1c2VyU2Nyb2xsID0gJChkb2N1bWVudCkuc2Nyb2xsVG9wKClcclxuICAgICAgICAgICAgZml4ZWROYXZiYXIoKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGZpeGVkTmF2YmFyKCkge1xyXG4gICAgICAgICAgICBjb25zdCAgIG5hdmJhciA9ICQoJy5uYXZiYXInKSxcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc2VzID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaXhlZDogJ2lzLS1maXhlZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6ICdpcy0tb3BhY2l0eScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHlfdHJpZ2dlcjogJ3QtLW9wYWNpdHknXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYodXNlclNjcm9sbCA+IG5hdmJhci5vdXRlckhlaWdodCgpICYmICFuYXZiYXIuaGFzQ2xhc3MoY2xhc3Nlcy5maXhlZCkpIHtcclxuICAgICAgICAgICAgICAgIG5hdmJhci5hZGRDbGFzcyhjbGFzc2VzLmZpeGVkKVxyXG4gICAgICAgICAgICAgICAgJCgnYm9keScpLmNzcygncGFkZGluZy10b3AnLCBuYXZiYXIub3V0ZXJIZWlnaHQoKSArICdweCcpXHJcbiAgICAgICAgICAgICAgICBuYXZiYXIucmVtb3ZlQ2xhc3MoY2xhc3Nlcy5vcGFjaXR5KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKHVzZXJTY3JvbGwgPCBuYXZiYXIub3V0ZXJIZWlnaHQoKSkge1xyXG4gICAgICAgICAgICAgICAgbmF2YmFyLnJlbW92ZUNsYXNzKGNsYXNzZXMuZml4ZWQpXHJcbiAgICAgICAgICAgICAgICAkKCdib2R5JykuY3NzKCdwYWRkaW5nLXRvcCcsIDApXHJcbiAgICAgICAgICAgICAgICBpZihuYXZiYXIuaGFzQ2xhc3MoY2xhc3Nlcy5vcGFjaXR5X3RyaWdnZXIpKVxyXG4gICAgICAgICAgICAgICAgICAgIG5hdmJhci5hZGRDbGFzcyhjbGFzc2VzLm9wYWNpdHkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQoJy5uYXZiYXJfX21vYmlsZS0tYnRuJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHRvZ2dsZU1vYmlsZU1lbnUoKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHRvZ2dsZU1vYmlsZU1lbnUoKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCAgIG5hdmJhciA9ICQoJy5uYXZiYXInKSxcclxuICAgICAgICAgICAgICAgICAgICBidXR0b24gPSAkKCcubmF2YmFyX19tb2JpbGUtLWJ0biBidXR0b24uaGFtYnVyZ2VyJyksXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NlcyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BlbjogJ2lzLS1vcGVuJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlX2h1bTogJ2lzLWFjdGl2ZSdcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZihuYXZiYXIuaGFzQ2xhc3MoY2xhc3Nlcy5vcGVuKSkge1xyXG4gICAgICAgICAgICAgICAgbmF2YmFyLnJlbW92ZUNsYXNzKGNsYXNzZXMub3BlbilcclxuICAgICAgICAgICAgICAgIGJ1dHRvbi5yZW1vdmVDbGFzcyhjbGFzc2VzLmFjdGl2ZV9odW0pXHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgIG5hdmJhci5hZGRDbGFzcyhjbGFzc2VzLm9wZW4pXHJcbiAgICAgICAgICAgICAgICBidXR0b24uYWRkQ2xhc3MoY2xhc3Nlcy5hY3RpdmVfaHVtKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBjbGFzc2VzID0ge1xyXG4gICAgICAgICAgICBudW1faXRlbTogXCIuc2xpZGVyX19uYXYtLWJ0blwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpdGVtQWN0aXZlSWQgPSAkKCcuc2xpZGVyX19uYXYtLWJ0bi5pcy0tYWN0aXZlJykuYXR0cignZGF0YS1zbGlkZXItaXRlbS1pZCcpXHJcblxyXG4gICAgICAgIG9wZW5FbGVtZW50KClcclxuXHJcbiAgICAgICAgJChjbGFzc2VzLm51bV9pdGVtKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaXRlbUFjdGl2ZUlkID0gJCh0aGlzKS5hdHRyKCdkYXRhLXNsaWRlci1pdGVtLWlkJylcclxuICAgICAgICAgICAgb3BlbkVsZW1lbnQoKVxyXG4gICAgICAgICAgICAkKGNsYXNzZXMubnVtX2l0ZW0pLnJlbW92ZUNsYXNzKCdpcy0tYWN0aXZlJylcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnaXMtLWFjdGl2ZScpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gb3BlbkVsZW1lbnQoKSB7XHJcbiAgICAgICAgICAgIGlmKGl0ZW1BY3RpdmVJZCkge1xyXG4gICAgICAgICAgICAgICAgJCgnLnNsaWRlcl9faXRlbScpLmhpZGUoKVxyXG4gICAgICAgICAgICAgICAgJCgnLnNsaWRlcl9faXRlbVtkYXRhLXNsaWRlci1pdGVtLWlkPVwiJyArIGl0ZW1BY3RpdmVJZCArICdcIl0nKS5mYWRlSW4oKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiLCIvKlxyXG52YXIgdGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0JylcclxudGFnLnNyYyA9IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vaWZyYW1lX2FwaVwiO1xyXG4gICAgICAgIFxyXG52YXIgZmlyc3RTY3JpcHRUYWcgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0JylbMF07XHJcbmZpcnN0U2NyaXB0VGFnLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRhZywgZmlyc3RTY3JpcHRUYWcpO1xyXG5cclxudmFyIHBsYXllcixcclxudmlkZW9JRCA9ICdNN2xjMVVWZi1WRSc7XHJcbmZ1bmN0aW9uIG9uWW91VHViZUlmcmFtZUFQSVJlYWR5KCkge1xyXG4gICAgcGxheWVyID0gbmV3IFlULlBsYXllcignX19pbl92aWRlb19fcGxheWVyJywge1xyXG4gICAgICAgIGhlaWdodDogJzM2MCcsXHJcbiAgICAgICAgd2lkdGg6ICc2NDAnLFxyXG4gICAgICAgIHZpZGVvSWQ6IHZpZGVvSUQsXHJcbiAgICAgICAgZXZlbnRzOiB7XHJcbiAgICAgICAgICAgICdvblJlYWR5JzogJycsXHJcbiAgICAgICAgICAgICdvblN0YXRlQ2hhbmdlJzogb25QbGF5ZXJTdGF0ZUNoYW5nZVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBvblBsYXllclJlYWR5KCkge1xyXG4gICAgX19pbl92aWRlb19fcGxheWVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgcGxheWVyLnBsYXlWaWRlbygpO1xyXG59XHJcblxyXG52YXIgZG9uZSA9IGZhbHNlO1xyXG5mdW5jdGlvbiBvblBsYXllclN0YXRlQ2hhbmdlKGV2ZW50KSB7XHJcbiAgICBpZiAoZXZlbnQuZGF0YSA9PSBZVC5QbGF5ZXJTdGF0ZS5QTEFZSU5HICYmICFkb25lKSB7XHJcbiAgICBzZXRUaW1lb3V0KHN0b3BWaWRlbywgNjAwMCk7XHJcbiAgICBkb25lID0gdHJ1ZTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBzdG9wVmlkZW8oKSB7XHJcbiAgICBwbGF5ZXIuc3RvcFZpZGVvKCk7XHJcbn1cclxuXHJcbnZhciBidXR0b25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaW4tdmlkZW9fX2NvbnRyb2xzLXBsYXknKTtcclxuXHJcbmZvcih2YXIgaSA9IDA7IGkgPCBidXR0b25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBidXR0b25zW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIHZpZGVvID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmlkZW9pZCcpO1xyXG4gICAgICAgIGlmKHZpZGVvKSB7XHJcbiAgICAgICAgICAgIHBsYXllci5sb2FkVmlkZW9CeUlkKHZpZGVvKTtcclxuICAgICAgICAgICAgX19pbl92aWRlb19fcGxheWVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW4tdmlkZW9fX2NvdmVyJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluLXZpZGVvX19jb250cm9scycpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIHBsYXllci5wbGF5VmlkZW8oKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaW4tdmlkZW9fX2JvdHRvbScpWzBdLmNsYXNzTGlzdC5hZGQoJ2lzLS1hY3RpdmUnKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBmYWxzZSk7XHJcbn1cclxuKi8iLCIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIGhvbWUgPSBuZXcgVml2dXMoJ215LXN2ZycsIHtcclxuICAgICAgICAgICAgdHlwZTogJ3NjZW5hcmlvJyxcclxuICAgICAgICAgICAgYW5pbVRpbWluZ0Z1bmN0aW9uOiBWaXZ1cy5FQVNFLFxyXG4gICAgICAgICAgICBvblJlYWR5OiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdvblJlYWR5JylcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgJCgnLmRyYXdpbmdfX2hhbmQnKS5oaWRlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KVxyXG59KShqUXVlcnkpOyJdfQ==

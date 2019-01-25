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
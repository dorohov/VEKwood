(function($) {
    "use strict"
    $(function() {
        
        $('.tab-container').hide()
        var ids = $('.tab-target.is--active').attr('data-tabid')
        $('.tab-container[data-tabid="' + ids + '"').show()

        $('.tab-target').click(function() {
            var id = $(this).attr('data-tabid')
            $('.tab-container').hide()
            $('.tab-target').removeClass('is--active')
            $(this).addClass('is--active')
            $('.tab-container[data-tabid="' + id + '"').show()
        })

    })
})(jQuery);
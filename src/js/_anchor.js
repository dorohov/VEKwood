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
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
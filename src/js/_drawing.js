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
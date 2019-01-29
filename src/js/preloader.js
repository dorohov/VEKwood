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
    $('.production__block ').css('visibility', 'visible')
    setTimeout(function() {
        $('#preload').css('width', '100%');
    }, 1000)
    setTimeout(function() {
        preload = false;
        $('.preloader').remove();
    }, 2000)
});
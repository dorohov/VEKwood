$('body').addClass('page-loading');
console.log('page loading added class');

$(window).on('load', function() {
    $('body').removeClass('page-loading');
    $('.preloader').remove();
});
$('form').parsley();

if(document.getElementsByClassName('phone--musk').length) {
    var bigFormPhoneMask = new IMask(
        document.getElementsByClassName('phone--musk')[0], {
        mask: '+{7}(900)000-00-00'
    });
    var bigFormPhoneMask = new IMask(
        document.getElementsByClassName('phone--musk')[1], {
        mask: '+{7}(900)000-00-00'
    });
    var bigFormPhoneMask = new IMask(
        document.getElementsByClassName('phone--musk')[2], {
        mask: '+{7}(900)000-00-00'
    });
}
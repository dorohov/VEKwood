$('form').parsley();

if(document.getElementsByClassName('phone--musk')[0]) {
    var bigFormPhoneMask = new IMask(
        document.getElementsByClassName('phone--musk')[0], {
        mask: '+{7}(900)000-00-00'
    });
}
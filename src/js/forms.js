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
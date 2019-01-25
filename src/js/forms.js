$('form').parsley();

var phoneInputs = document.getElementsByClassName('phone--musk');

if(phoneInputs.length) {
    for(var i = 0; i < phoneInputs.length; i++) {
        new IMask(
            phoneInputs[i], {
            mask: '+{7}(900)000-00-00'
        });
    }
}
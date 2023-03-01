document.getElementById ('bot-map').onclick = function () {
    var win = window.open ("https://www.google.com.ar/maps/place/Wheeler+St,+Dracut,+MA,+EE.+UU./@42.6882079,-71.244623,17z/data=!3m1!4b1!4m6!3m5!1s0x89e3a87f957da1fd:0x41391e0c0815b437!8m2!3d42.688204!4d-71.2424343!16s%2Fg%2F1tq4s2k2", "_blank");
    window.focus();
   
}

document.getElementById ('bot-tel').onclick = function () {
    var win = window.open ("https://web.whatsapp.com/", "_blank");
    window.focus();
}

function foco (nombre){
    document.getElementById("nombre").style.border = "2px solid red"
}

function desenfoco (nombre) {
    document.getElementById("nombre").style.border = "inherit"

}

function foco2 (mail){
    document.getElementById("mail").style.border = "2px solid red"
}

function desenfoco2 (mail) {
    document.getElementById("mail").style.border = "inherit"

}
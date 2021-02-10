document.getElementById('email').addEventListener('input', function() {
    campo = event.target;
    valido = document.getElementById('emailOK');
    iconerror = document.getElementById('icon_error');
    var reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var regOficial = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    //Se muestra un texto a modo de ejemplo, luego va a ser un icono
    if (reg.test(campo.value) && regOficial.test(campo.value)) {
      valido.innerText = "Email is valid";
      iconerror.style.visibility = "hidden";
      campo.style.border ="solid 1px #ce9797";
    } else if (reg.test(campo.value)) {
      valido.innerText = "Email is valid";
      iconerror.style.visibility = "hidden";
      campo.style.border ="solid 1px #ce9797";
    } else {
      valido.innerText = "Please provide a valid email!";
      campo.style.border ="2px solid #CB4335";
      iconerror.style.visibility = "visible";
    }
    if(campo.value == 0){
        iconerror.style.visibility = "hidden";
        campo.style.border ="solid 1px #ce9797";
        valido.innerText = "";
    }
});
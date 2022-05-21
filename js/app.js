// -------  Validacion de forulario de INSCRIPCION ---------------

const formInscr = document.querySelector(".classFormInscr");
formInscr.addEventListener("submit",validaFormInscr);
function validaFormInscr(evento1) {
evento1.preventDefault(); /* No se ejecuta el submit */
var flag = false; /* flag para detectar algun error */
/* ------ */
const entradaNombre = document.getElementById("fidnombre");
const nombre = entradaNombre.value;
entradaNombre.style.borderColor = "grey"; /* Lo inicializo ante cada chequeo */
entradaNombre.style.borderWidth = "0.1rem";
const advNombre = document.querySelector(".advNombreInscr");
advNombre.style.display = "none"; /* Lo inicializo ante cada chequeo */
if (nombre.length == 0) {
    advNombre.style.display = "grid";
    entradaNombre.style.borderColor = "red";
    entradaNombre.style.borderWidth = "0.3rem";
    // entradaNombre.style = "border-color: red;"; OTRA MANERA
    // advNombre.innerHTML = "Su Nombre es requerido por el formulario";
    /* NO USO ESTE PORQUE INNER PERMITE AGREGAR CÓDIGFO HTML, NO ES TAN SEGURO COMO SOLO AGREGAR TEXTO */
    advNombre.textContent = "Su Nombre es requerido por el formulario";
    flag = true;
/*  return; NO SALGO AHORA PARA VERIFICAR TODOS LOS CAMPOS JUNTOS */
}
/* ------ */
const entradaApellido = document.getElementById("fidapelli");
const apellido = entradaApellido.value;
entradaApellido.style.borderColor = "grey"; /* Lo inicializo ante cada chequeo */
entradaApellido.style.borderWidth = "0.1rem";
const advApellido = document.querySelector(".advApelliInscr");
advApellido.style.display = "none"; /* Lo inicializo ante cada chequeo */
if (apellido.length == 0) {
    entradaApellido.style.borderColor = "red";
    entradaApellido.style.borderWidth = "0.3rem";
    advApellido.style.display = "grid";
    advApellido.textContent = "Su Apellido es requerido por el formulario";
    flag = true;
}
/* ------ */
const entradaEmail = document.getElementById("fidemail");
const email = entradaEmail.value;
entradaEmail.style.borderColor = "grey"; /* Lo inicializo ante cada chequeo */
entradaEmail.style.borderWidth = "0.1rem";
const advEmail = document.querySelector(".advMailInscr");
advEmail.style.display = "none"; /* Lo inicializo ante cada chequeo */
if (email.length == 0) {
    entradaEmail.style.borderColor = "red";
    entradaEmail.style.borderWidth = "0.3rem";
    advEmail.style.display = "grid";
    advEmail.textContent = "Su email es requerido por el formulario";
    flag = true;
}
else {
    if(email.indexOf(".") == -1){
    entradaEmail.style.borderColor = "red";
    entradaEmail.style.borderWidth = "0.3rem";
    advEmail.style.display = "grid";
    advEmail.textContent = "Las direcciones de email cuentan con al menos un punto en su estructura";
    flag = true;
    }

    if(email.indexOf("@") == -1){
    entradaEmail.style.borderColor = "red";
    entradaEmail.style.borderWidth = "0.3rem";
    advEmail.style.display = "grid";
    advEmail.textContent = "Las direcciones de email cuentan con un @ en su estructura";
    flag = true;
    }
}
/* ------ */
const entradaCelular = document.getElementById("fidcelu");
const celular = entradaCelular.value;
entradaCelular.style.borderColor = "grey"; /* Lo inicializo ante cada chequeo */
entradaCelular.style.borderWidth = "0.1rem";
const advCelular = document.querySelector(".advdCeluInscr");
advCelular.style.display = "none"; /* Lo inicializo ante cada chequeo */
if (celular.length == 0) {
    entradaCelular.style.borderColor = "red";
    entradaCelular.style.borderWidth = "0.3rem";
    advCelular.style.display = "grid";
    advCelular.textContent = "Su número de celular es requerido por el formulario";
    flag = true;
}
else {
    if(celular.match(/[^0-9-() ]/g) != null) {
    entradaCelular.style.borderColor = "red";
    entradaCelular.style.borderWidth = "0.3rem";
    advCelular.style.display = "grid";
    advCelular.textContent = "El campo para número de celular solo puede contener números, (, ), ó -";
    flag = true;
    }
    else{
    if(celular.length <= 6) {
    entradaCelular.style.borderColor = "red";
    entradaCelular.style.borderWidth = "0.3rem";
    advCelular.style.display = "grid";
    advCelular.textContent = "El número de celular parece no ser válido";
    flag = true;
    }

    }
}
/* ------ */
const entradaDni = document.getElementById("fiddni");
const dni = entradaDni.value;
entradaDni.style.borderColor = "grey"; /* Lo inicializo ante cada chequeo */
entradaDni.style.borderWidth = "0.1rem";
const advDni = document.querySelector(".advDniInscr");
advDni.style.display = "none"; /* Lo inicializo ante cada chequeo */
if (dni.length == 0) {
    entradaDni.style.borderColor = "red";
    entradaDni.style.borderWidth = "0.3rem";
    advDni.style.display = "grid";
    advDni.textContent = "Su DNI es requerido por el formulario";
    flag = true;
}
else {
    if(dni.match(/[^0-9]/g) != null) {
    entradaDni.style.borderColor = "red";
    entradaDni.style.borderWidth = "0.3rem";
    advDni.style.display = "grid";
    advDni.textContent = "El DNI solo puede contener números";
    flag = true;
    }
    else{
    if (dni.length <= 6) {
    entradaDni.style.borderColor = "red";
    entradaDni.style.borderWidth = "0.3rem";
    advDni.style.display = "grid";
    advDni.textContent = "El DNI ingresado aparenta no ser válido";
    flag = true;
    }
}
}
/* ------ */
flagRadio=false;
const entradaSedeCentral = document.getElementById("fidsedecentral");
const entradaSedeSur = document.getElementById("fidsedesur");
const divSede = document.querySelector(".fclasssedecpo");
divSede.style.borderStyle = "none"; /* Lo inicializo ante cada chequeo */
const advSede = document.querySelector(".advSedeInscr");
advSede.style.display = "none"; /* Lo inicializo ante cada chequeo */
if (entradaSedeCentral.checked) {
    flagRadio=true;}
if (entradaSedeSur.checked) {
    flagRadio=true;}
if(!flagRadio){
divSede.style.borderStyle = "Solid";
divSede.style.borderColor = "red";
divSede.style.borderWidth = "0.3rem";
advSede.style.display = "grid";
advSede.textContent = "Por favor selecione una Sede";
flag = true;
}
/* ------ */
sedeSelect.style.borderColor = "grey";
sedeSelect.style.borderWidth = "0.1rem";
const advSelector = document.querySelector(".advSelectorInscr");
advSelector.style.display = "none"; /* Lo inicializo ante cada chequeo */
if(!flagSelect){
sedeSelect.style.borderColor = "red";
sedeSelect.style.borderWidth = "0.3rem";
advSelector.style.display = "grid";
advSelector.textContent = " Debe seleccionar el módulo a inscribirse";
flag = true;
}
/* ------ */
if(!flag){
this.submit(); /* Si no hu errores, ejecuto el submit */
}
}
// ------- FIN Validacion de forulario de INSCRIPCION ------------

// ----- Valida/Detecta acceso a selector SELECT ------
var flagSelect = false;
const sedeSelect = document.querySelector("#fidmodulo");
const advSelector = document.querySelector(".advSelectorInscr");
sedeSelect.addEventListener("focus",validaSelectSede);
function validaSelectSede() {
flagSelect = true;
    sedeSelect.style.borderColor = "grey";
    sedeSelect.style.borderWidth = "0.1rem";
    advSelector.style.display = "none";
     return;
/* Supongo se podrá hacer con focus*/
/* Usted no revisó las opciones de este menu, asegurese es la correcta*/
// ----- Valida acceso a selector SELECT ------
}


// -------- Validacion de forulario de CONTACTO ---------

const formCto = document.querySelector(".classFormuContacto");
formCto.addEventListener("submit",validaFormCto);
function validaFormCto(evento2) {
evento2.preventDefault(); /* No se ejecuta el submit */
flagCto = false;
// -----
const fcEntradaNombre = document.getElementById("fcidnombre");
const fcnombre = fcEntradaNombre.value;
fcEntradaNombre.style.borderColor = "grey"; /* Lo inicializo ante cada chequeo */
fcEntradaNombre.style.borderWidth = "0.1rem";
const advFcNombre = document.querySelector(".advNombreCto");
advFcNombre.style.display = "none"; /* Lo inicializo ante cada chequeo */
if (fcnombre.length == 0) {
    fcEntradaNombre.style.borderColor = "red";
    fcEntradaNombre.style.borderWidth = "0.3rem";
    advFcNombre.style.display = "grid";
    advFcNombre.textContent = "Su Nombre es requerido por el formulario";
    flagCto = true;
}
/* ------ */


const fcEntradaMail = document.getElementById("fcidemail");
const fcmail = fcEntradaMail.value;
fcEntradaMail.style.borderColor = "grey"; /* Lo inicializo ante cada chequeo */
fcEntradaMail.style.borderWidth = "0.1rem";
const advFcMail = document.querySelector(".advEmailCto");
advFcMail.style.display = "none"; /* Lo inicializo ante cada chequeo */
if (fcmail.length == 0) {
    fcEntradaMail.style.borderColor = "red";
    fcEntradaMail.style.borderWidth = "0.3rem";
    advFcMail.style.display = "grid";
    advFcMail.textContent = "Su Email es requerido por el formulario";
    flagCto = true;
}
else{
    if(fcmail.indexOf(".") == -1){
    fcEntradaMail.style.borderColor = "red";
    fcEntradaMail.style.borderWidth = "0.3rem";
    advFcMail.style.display = "grid";
    advFcMail.textContent = "Las direcciones de email cuentan con al menos un punto en su estructura";
    flagCto = true;
    }

    if(fcmail.indexOf("@") == -1){
    fcEntradaMail.style.borderColor = "red";
    fcEntradaMail.style.borderWidth = "0.3rem";
    advFcMail.style.display = "grid";
    advFcMail.textContent = "Las direcciones de email cuentan con un @ en su estructura";
    flagCto = true;
    }
}
/* ------ */
const fcEntradaMsj = document.getElementById("fcidmensaje");
const fcMsj = fcEntradaMsj.value;
fcEntradaMsj.style.borderColor = "grey"; /* Lo inicializo ante cada chequeo */
fcEntradaMsj.style.borderWidth = "0.1rem";
const advFcMsj = document.querySelector(".advMsjCto");
advFcMsj.style.display = "none"; /* Lo inicializo ante cada chequeo */
if (fcMsj.length == 0) {
    fcEntradaMsj.style.borderColor = "red";
    fcEntradaMsj.style.borderWidth = "0.3rem";
    advFcMsj.style.display = "grid";
    advFcMsj.textContent = "Por favor, escriba su mensaje o consulta";
    flagCto = true;
}

if(!flagCto){
this.submit(); /* Si no hu errores, ejecuto el submit */
}
}


/* --------- Ctrol Visual ícono Home ----- */
/*  con font-size:62.5% 1rem=10px -> 8rem=80px / 16rem=160px
    con font-size:32% 1rem=5.1px -> 8rem=41px / 16rem=82px  */

window.onscroll = function() {
    funcionScroll();
} 

// window.addEventListener("onscroll",funcionScroll);

const imagenInicio = document.querySelector(".linkFijoInicio");
var flagVisible = false;
function funcionScroll() {
const avanceHorizBody = document.body.scrollTop;
const avanceHorizHtml = document.documentElement.scrollTop;
const altoVentana = window.innerHeight;
/* Si sumo el avance horizontal + alto ventana, me da 
las coordinadas de lo que se ve al tope inferior de la ventana*/
const altoBody = document.body.scrollHeight;
const altoHtml = document.documentElement.scrollHeight;

//   if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
//     imagenInicio.style.visibility = "visible";
//   } else {
//     imagenInicio.style.visibility = "hidden";
//   }

//   if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
//     imagenInicio.style.visibility = "visible";
//   } else {
//     imagenInicio.style.visibility = "hidden";
//   }

  if (avanceHorizBody > 120 || avanceHorizHtml > 120) {
    // No se esta visualizando menu navegación
    // Se verifica si no esta visualizando footer
        if((avanceHorizBody+altoVentana > altoBody-120) || (avanceHorizHtml+altoVentana > altoHtml-120)){
        flagVisible = false;
        }
        else{
        flagVisible = true;       
        }


  } 
  else {
    flagVisible = false; /* esta visualizando menu nav */
  }


  if (flagVisible) {
    imagenInicio.style.visibility = "visible";
  } else {
    imagenInicio.style.visibility = "hidden";
  }

}
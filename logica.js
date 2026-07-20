let formulario = document.querySelector(".formReserva");
let botonReserva = document.querySelector("#btnSolicitarReserva");

let nombreReserva = document.querySelector("#nombreReserva");
let telefonoReserva = document.querySelector("#telefonoReserva");
let fechaReserva = document.querySelector("#fechaReserva");
let horaReserva = document.querySelector("#horaReserva");
let personasReserva = document.querySelector("#personasReserva");
let mensajeReserva = document.querySelector("#mensajeReserva");

let btnMenu = document.querySelector("#btnMenu");
let navLinks = document.querySelector(".navLinks");

let btnWhatsapp = document.querySelector("#btnWhatsapp");
let botonesRedes = document.querySelectorAll(".redSocial");
let btnVerUbicacion = document.querySelector("#btnVerUbicacion");

let modalDemo = document.querySelector("#modalDemo");
let cerrarModalDemo = document.querySelector("#cerrarModalDemo");
let aceptarModalDemo = document.querySelector("#aceptarModalDemo");
let tituloModalDemo = document.querySelector("#tituloModalDemo");
let textoModalDemo = document.querySelector("#textoModalDemo");

let links = document.querySelectorAll(
    ".navLinks a, .btnNav, .btnPrincipal, .btnSecundario"
);

botonReserva.addEventListener("click", solicitarReserva);

btnMenu.addEventListener("click", function(){

    navLinks.classList.toggle("activo");

});

btnWhatsapp.addEventListener("click", function(){

    abrirModalDemo(
        "WhatsApp del restaurante",
        "En una web real, este botón abriría el WhatsApp configurado por el negocio."
    );

});

btnVerUbicacion.addEventListener("click", function(){

    abrirModalDemo(
        "Ubicación del restaurante",
        "En una web real, este botón abriría Google Maps con la dirección exacta del restaurante."
    );

});

for(let boton of botonesRedes){

    boton.addEventListener("click", function(){

        let red = boton.dataset.red;

        abrirModalDemo(
            red + " del restaurante",
            "En una web real, este botón abriría el perfil oficial de " + red + "."
        );

    });

}

cerrarModalDemo.addEventListener("click", cerrarModal);
aceptarModalDemo.addEventListener("click", cerrarModal);

modalDemo.addEventListener("click", function(e){

    if(e.target == modalDemo){
        cerrarModal();
    }

});

for(let link of links){

    link.addEventListener("click", function(e){

        let destino = this.getAttribute("href");

        if(destino && destino.startsWith("#")){

            e.preventDefault();

            let seccion = document.querySelector(destino);

            if(seccion){

                seccion.scrollIntoView({
                    behavior: "smooth"
                });

            }

            navLinks.classList.remove("activo");

        }

    });

}

function solicitarReserva(){

    if(
        nombreReserva.value.trim() == "" ||
        telefonoReserva.value.trim() == "" ||
        fechaReserva.value == "" ||
        horaReserva.value == "" ||
        personasReserva.value == ""
    ){

        mostrarMensajeReserva(
            "Completa todos los datos para solicitar la reserva",
            "errorReserva"
        );

        return;
    }

    mostrarMensajeReserva(
        "Solicitud preparada. En una web real se enviaría al restaurante.",
        "exitoReserva"
    );

    abrirModalDemo(
        "Solicitud de reserva",
        "La reserva de " +
        nombreReserva.value.trim() +
        " para " +
        personasReserva.value +
        " quedó preparada como demostración."
    );

    formulario.reset();

}

function mostrarMensajeReserva(texto,tipo){

    mensajeReserva.textContent = texto;
    mensajeReserva.className = "mensajeReserva";
    mensajeReserva.classList.add(tipo);

    setTimeout(function(){

        mensajeReserva.textContent = "";
        mensajeReserva.className = "mensajeReserva";

    },3000);

}

function abrirModalDemo(titulo,texto){

    tituloModalDemo.textContent = titulo;
    textoModalDemo.textContent = texto;
    modalDemo.classList.add("activo");

}

function cerrarModal(){

    modalDemo.classList.remove("activo");

}
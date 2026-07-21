const formulario = document.querySelector(".formReserva");

const nombreReserva = document.querySelector("#nombreReserva");
const telefonoReserva = document.querySelector("#telefonoReserva");
const fechaReserva = document.querySelector("#fechaReserva");
const horaReserva = document.querySelector("#horaReserva");
const personasReserva = document.querySelector("#personasReserva");
const mensajeReserva = document.querySelector("#mensajeReserva");

const btnMenu = document.querySelector("#btnMenu");
const navLinks = document.querySelector(".navLinks");

const btnWhatsapp = document.querySelector("#btnWhatsapp");
const botonesRedes = document.querySelectorAll(".redSocial");
const btnVerUbicacion = document.querySelector("#btnVerUbicacion");

const modalDemo = document.querySelector("#modalDemo");
const cerrarModalDemo = document.querySelector("#cerrarModalDemo");
const aceptarModalDemo = document.querySelector("#aceptarModalDemo");
const tituloModalDemo = document.querySelector("#tituloModalDemo");
const textoModalDemo = document.querySelector("#textoModalDemo");

const links = document.querySelectorAll(
    ".navLinks a, .btnNav, .btnPrincipal, .btnSecundario"
);

formulario.addEventListener("submit", solicitarReserva);

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

for(const boton of botonesRedes){

    boton.addEventListener("click", function(){

        const red = boton.dataset.red;

        abrirModalDemo(
            `${red} del restaurante`,
            `En una web real, este botón abriría el perfil oficial de ${red}.`
        );

    });

}

cerrarModalDemo.addEventListener("click", cerrarModal);
aceptarModalDemo.addEventListener("click", cerrarModal);

modalDemo.addEventListener("click", function(e){

    if(e.target === modalDemo){
        cerrarModal();
    }

});

document.addEventListener("keydown", function(e){

    if(e.key === "Escape"){
        cerrarModal();
        navLinks.classList.remove("activo");
    }

});

for(const link of links){

    link.addEventListener("click", function(e){

        const destino = this.getAttribute("href");

        if(destino && destino.startsWith("#")){

            e.preventDefault();

            const seccion = document.querySelector(destino);

            if(seccion){

                seccion.scrollIntoView({
                    behavior: "smooth"
                });

            }

            navLinks.classList.remove("activo");

        }

    });

}

function solicitarReserva(e){

    e.preventDefault();

    if(
        nombreReserva.value.trim() === "" ||
        telefonoReserva.value.trim() === "" ||
        fechaReserva.value === "" ||
        horaReserva.value === "" ||
        personasReserva.value === ""
    ){

        mostrarMensajeReserva(
            "Completa todos los datos para solicitar la reserva",
            "errorReserva"
        );

        return;
    }

    const nombre = nombreReserva.value.trim();
    const personas = personasReserva.value;

    mostrarMensajeReserva(
        "Solicitud preparada. En una web real se enviaría al restaurante.",
        "exitoReserva"
    );

    abrirModalDemo(
        "Solicitud de reserva",
        `La reserva de ${nombre} para ${personas} quedó preparada como demostración.`
    );

    formulario.reset();

}

function mostrarMensajeReserva(texto, tipo){

    mensajeReserva.textContent = texto;
    mensajeReserva.className = "mensajeReserva";
    mensajeReserva.classList.add(tipo);

    setTimeout(function(){

        mensajeReserva.textContent = "";
        mensajeReserva.className = "mensajeReserva";

    }, 3000);

}

function abrirModalDemo(titulo, texto){

    tituloModalDemo.textContent = titulo;
    textoModalDemo.textContent = texto;
    modalDemo.classList.add("activo");

}

function cerrarModal(){

    modalDemo.classList.remove("activo");

}
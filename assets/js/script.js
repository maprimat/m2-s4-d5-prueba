/* ENABLE TOOLTIPS */

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

/* SCRIPTS */

/* CAMBIAR TEXTO BOTON FORM */
$("#enviarForm").on("click", function () {
    $(this).text("Enviado");
});

/* FUNCIONES */
$(function () {

    /* BROWSER PROMPT AL PRESIONAR BOTON FORM */
    $("#enviarForm").on("click", function (event) {
        alert("Nos has contactado correctamente, ¡gracias por elegirnos!")
    })

    /* CAMBIAR COLOR DE H2 DESPUES DE HACER DOBLE CLIC */
    $("h2").on("dblclick", function () {
        $(this).css("color", "var(--info)");
    })

    /* OCULTAR PARRAFOS DE TODAS LAS CARDS AL HACER CLIC EN EL TITULO DE CUALQUIERA */
    $("#featured .card-title").on("click", function (event) {
        $("#featured .card-text").toggle("slow");
    })
});
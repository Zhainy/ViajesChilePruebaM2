// formulario
$(document).ready(function () {
    $("#contacto").submit(function (event) {

        event.preventDefault();
        var nombre = $("#nombre").val()

        var correo = $("#asunto").val()

        var mensaje = $("#mensaje").val()
        if (nombre === "" || asunto === "" || mensaje === "") {
            alert("Por favor, completa todos los campos")
        } else {
            alert("Su mensaje ha sido enviado con éxito, Nos pondremos en contacto")
        }
    })
})
// tooltip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
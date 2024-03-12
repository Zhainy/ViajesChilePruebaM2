$(document).ready(function(){
    $("#contacto").submit(function(event){

        event.preventDefault();
        var nombre = $("#nombre").val()

        var correo = $("#asunto").val()

        var mensaje = $("#mensaje").val()
        if(nombre === ""  correo === ""  mensaje === ""){
            alert("Por favor, complete todos los campos")
        }else{
            alert("Su mensaje ha enviado con éxito, Nos pondremos en contacto")
        }
    })
})
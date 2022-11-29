import { validaInput,validaTextarea } from "./validaciones.js";

const inputs = document.querySelectorAll("input"); // Seleccionamos todos los elementos input 
const textareas = document.querySelectorAll("textarea"); // Selecciona todos los elemntos textare

inputs.forEach( input => { // recorremos todos los inpust
    input.addEventListener("blur", (input) => { // Agregamos el addEventListener a todos los inputs
        validaInput(input.target);
    })
});

textareas.forEach( textarea =>{
    textarea.addEventListener("blur", (textarea) => {
        validaTextarea(textarea.target);
    });
});
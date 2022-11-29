export function validaInput(input) {
    const tipoDeInput = input.dataset.tipo; // Obtenemos la colección de todos los data
    if(validadores[tipoDeInput]) { // Verifica el tipo de input
        validadores[tipoDeInput](input)
    }

    if(input.validity.valid) {
        input.parentElement.classList.remove("content__form--invalid");
        input.parentElement.querySelector(".form__input-message-erro").innerHTML = "";
    } else {
        input.parentElement.classList.add("content__form--invalid");
        input.parentElement.querySelector(".form__input-message-erro").innerHTML = mostrarMensajeDeError(tipoDeInput, input);
    }
}

export function validaTextarea(textare) {
    const tipoDeTextarea = textare.dataset.tipo; // Obtenemos la colección de todos los data
    if(validadores[tipoDeTextarea]) { // Verifica el tipo de input
        validadores[tipoDeTextarea](textare)
    }
    
    console.log(textare.parentElement);

    if(textare.validity.valid) {
        textare.parentElement.classList.remove("content__form--invalid");
        textare.parentElement.querySelector(".form__input-message-erro").innerHTML = "";
    } else {
        textare.parentElement.classList.add("content__form--invalid");
        textare.parentElement.querySelector(".form__input-message-erro").innerHTML = mostrarMensajeDeError (tipoDeTextarea, textare);
    }
}

const tipoDeErrores = [ 
    "valueMissing",
    "patternMismatch",
    "tooLong",
    "typeMismatch"
];

const mensajeDeError = {
    name: {
        valueMissing: "El campo nombre no puede estar vacío",
        tooLong: "El campo nombre no puede tener mas de 40 caracteres"
    },
    message: {
        valueMissing: "El campo mensaje no puede estar vacío"
    },
    password: {
        valueMissing: "El campo contraseña no puede estar vacío",
        patternMismatch: "Al menos 6 caracteres, máximo 12, debe contener una letra minúscula, una letra mayúscula, un número y no puede contener caracteres especiales."
    },
    email: {
        valueMissing: "El campo correo electronico no puede estar vacío",
        typeMismatch: "El correo electronico no es valido"
    },
    url: {
        valueMissing: "El campo url no puede estar vacío",
        typeMismatch: "La url no es valida"
    },
    category: {
        valueMissing: "El campo categoria no puede estar vacío"
    },
    productname: {
        valueMissing: "El campo nombre del producto no puede estar vacio",
        tooLong: "AAAAAAAAAAAAAAAA"
    },
    price: {
        valueMissing: "El campo precio no puede estar vacio"
    },
    description: {
        valueMissing: "El campo descripción del producto no puede estar vacio"
    }
}

function mostrarMensajeDeError (tipoDeInput, input) {
    let mensaje = "";
    tipoDeErrores.forEach ( error => {
        if(input.validity[error]) {
            mensaje = mensajeDeError[tipoDeInput][error];
        }
    });
    return mensaje;
}

const validadores = { 
}

export const validaciones = {
    validaInput,
    validaTextarea
}
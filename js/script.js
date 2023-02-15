const heading = document.querySelector("#heading__texto");
// heading.textContent += " Hola"

const head = document.getElementById("heading__texto");

// window.addEventListener("load", () =>{

//     console.log(botonFormulario);
// })
const newA = document.createElement("A");
newA.href = "contacto.html";
newA.textContent = "Nuevo";
newA.classList.add("navegacion__enlace");

document.querySelectorAll(".navegacion")[0].appendChild(newA);

// const botonNuevo = document.createElement("input")
// botonNuevo.type = "submit";
// botonNuevo.value = "Nuevo boton"
// botonNuevo.classList.add("boton");
// botonNuevo.classList.add("boton--primario");
// document.querySelectorAll(".imagen__bg")[0].appendChild(botonNuevo)

// botonNuevo.addEventListener("click", ()=>{
//     console.log("hola")
// })

// datos de formulario

const formulario = {
    nombre : "",
    email: "",
    mensaje: ""
}

let contadorIntentos = 0;
const errorNombre = document.createElement("p");
const errorEmail = document.createElement("p");
const errorMensaje = document.createElement("p");
const nombre = document.querySelector("#nombre")
nombre.addEventListener("input",agregarDatos)
const email = document.querySelector("#email")
email.addEventListener("input", agregarDatos)
const mensaje = document.querySelector("#mensaje")
mensaje.addEventListener("input", agregarDatos)

function agregarDatos(e){
    formulario [String(e.target.id)] = String(e.target.value);
    const {nombre,email,mensaje} = formulario;
    if (nombre !== "" || email !== "" || mensaje !== "") {
        if (nombre != "") {
            errorNombre.remove();
        };
        if (email != "") {
            errorEmail.remove();
        };
        if (mensaje != "") {
            errorMensaje.remove();
        };
    }
    if (contadorIntentos != 0) {
        if (nombre === "" || email === "" || mensaje === "") {
            if (nombre === "") {
                mostrarError("Nombre obligatorio",formSend,errorNombre);
            }
            if (email === "") {
                mostrarError("Ingrese el email",formSend,errorEmail);
            }
            if (mensaje === "") {
                mostrarError("Ingrese el mensaje",formSend,errorMensaje);
            }
        }
    }
}

//submit para formulario

const formSend = document.querySelector(".Contacto__formulario")
formSend.addEventListener("submit",(evento)=>{
    evento.preventDefault();
    const {nombre,email,mensaje} = formulario;
    if (nombre === "" || email === "" || mensaje === "") {
        contadorIntentos = 1;
        if (nombre === "") {
            mostrarError("Nombre obligatorio",formSend,errorNombre);
        }
        if (email === "") {
            mostrarError("Ingrese el email",formSend,errorEmail);
        }
        if (mensaje === "") {
            mostrarError("Ingrese el mensaje",formSend,errorMensaje);
        }
        return;
    }
    errorNombre.textContent = "Genial pasaste"
    formSend.appendChild(errorNombre)
})
function mostrarError(mensaje,agregar,error){
    error.textContent = mensaje;
    error.classList.add("error__mensaje");
    agregar.appendChild(error);
}


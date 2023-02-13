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

const botonFormulario = document.querySelector(".boton");
botonFormulario.addEventListener("click", e => {
    console.log("hola")
    e.preventDefault();
})

// const botonNuevo = document.createElement("input")
// botonNuevo.type = "submit";
// botonNuevo.value = "Nuevo boton"
// botonNuevo.classList.add("boton");
// botonNuevo.classList.add("boton--primario");
// document.querySelectorAll(".imagen__bg")[0].appendChild(botonNuevo)

// botonNuevo.addEventListener("click", ()=>{
//     console.log("hola")
// })







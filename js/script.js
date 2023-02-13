const heading = document.querySelector("#heading__texto");
// heading.textContent += " Hola"

const head = document.getElementById("heading__texto");

const newA = document.createElement("A");
newA.href = "contacto.html";
newA.textContent = "Nuevo";
newA.classList.add("navegacion__enlace");

document.querySelectorAll(".navegacion")[0].appendChild(newA);
document.querySelectorAll(".navegacion")[1].appendChild(newA);

console.log(newA);





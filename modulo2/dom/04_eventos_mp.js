let parrafo = null;

document.getElementById("crear").addEventListener("click", () => {
    parrafo = document.createElement("p");
    parrafo.textContent = "Propiedad creada dinámicamente en Inmobiliaria MAC";
    document.getElementById("contenedor").appendChild(parrafo);
});

document.getElementById("eliminar").addEventListener("click", () => {
    if (parrafo) parrafo.remove();
});

function saludar() {
    alert("Bienvenido a Inmobiliaria MAC");
}

document.getElementById("parrafo")
    .addEventListener("dblclick", () => {
        alert("Acción ejecutada en el párrafo");
    });

document.getElementById("nombre")
    .addEventListener("input", (e) => {
        console.log("Cliente:", e.target.value);
    });

const cuadro = document.getElementById('cuadro');
const botonTamano = document.querySelector('button[onclick="aumentarTamano()"]');
let opcionesMostradas = false;

function cambiarColor() {
  const colores = ['#58a6ff', '#ff7b72', '#00ff00', '#ff00ff', '#ffff00'];
  const randomColor = colores[Math.floor(Math.random() * colores.length)];
  cuadro.style.backgroundColor = randomColor;
}

function aumentarTamano() {
  const width = parseInt(cuadro.style.width);
  const height = parseInt(cuadro.style.height);
  cuadro.style.width = (width + 20) + 'px';
  cuadro.style.height = (height + 20) + 'px';

  if (!opcionesMostradas) {
    const tamanos = ["50m²", "70m²", "90m²", "120m²"];
    botonTamano.innerHTML = "⬆️ Tamaños disponibles: " + tamanos.join(" | ");
    opcionesMostradas = true;
  }
}

function reiniciar() {
  cuadro.style.width = '100px';
  cuadro.style.height = '100px';
  cuadro.style.backgroundColor = '#58a6ff';
  opcionesMostradas = false;
  botonTamano.innerHTML = "⬆️ Aumentar Tamaño de departamentos";
}

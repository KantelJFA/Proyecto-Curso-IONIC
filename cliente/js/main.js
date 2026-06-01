import { cantidadesValidas, puntuación, estado, filaTabla, añadePuntuaciones, grado } from "./funciones.js";

const listaCanciones = [
  { id: "001", titulo: "Transcient love", dificultad: "1", notas: 150, estado: 0 },
  { id: "002", titulo: "Hall of the raving dragon", dificultad: "4", notas: 600, estado: 0 },
  { id: "003", titulo: "King of the disco", dificultad: "3", notas: 400, estado: 0 },
  { id: "004", titulo: "Festival night", dificultad: "2", notas: 450, estado: 0 },
  { id: "005", titulo: "Mad Jester", dificultad: "1", notas: 50, estado: 0 },
  { id: "006", titulo: "Revenge of the lonely princess", dificultad: "5", notas: 800, estado: 0 }
];

const listaPuntuaciones = []

const tablaCanciones = document.getElementsByTagName("table")[0];

// Descomentar para añadir datos de forma automatica.
/*
const valoresPuntuaciones = [
  { id: "001", perfect: 149, good: 1, fail: 0 },
  { id: "001", perfect: 125, good: 25, fail: 0 },
  { id: "002", perfect: 520, good: 60, fail: 20 },
  { id: "002", perfect: 540, good: 30, fail: 10 },
  { id: "003", perfect: 350, good: 40, fail: 10 },
  { id: "003", perfect: 320, good: 70, fail: 10 },
  { id: "004", perfect: 425, good: 20, fail: 5 },
  { id: "004", perfect: 405, good: 45, fail: 0 },
  { id: "005", perfect: 40, good: 10, fail: 0 },
  { id: "005", perfect: 45, good: 5, fail: 0 },
  { id: "006", perfect: 620, good: 150, fail: 30 },
  { id: "006", perfect: 620, good: 170, fail: 10 },
];

for (let i = valoresPuntuaciones.length - 1; i >= 0; i--) {
  if (i > 0) {
    const j = Math.floor(Math.random() * (i + 1));
    [valoresPuntuaciones[i], valoresPuntuaciones[j]] = [valoresPuntuaciones[j], valoresPuntuaciones[i]];
  }
  const valores = valoresPuntuaciones.pop();
  const cancion = listaCanciones.find(({ id }) => id === valores.id);
  añadePuntuaciones(listaPuntuaciones, listaCanciones, valores.id, puntuación(valores.perfect, valores.good, cancion.notas), estado(valores.good, valores.fail));
}
*/
// Fin sección añadir datos de forma automatica.

listaCanciones.forEach(cancion => {
  let puntuación = 0;
  if (cancion.estado !== 0) puntuación = listaPuntuaciones.filter(p => cancion.id.includes( p.id )).map( p => p.valor ).sort((a,b) => b - a)[0];
  const fila = filaTabla(cancion.id, cancion.titulo, cancion.dificultad, puntuación, cancion.estado);
  tablaCanciones.appendChild(fila);
});

// Descomentar para añadir datos uno a uno. Redundante si se añaden datos de forma automatica.
/*
const valoresPuntuaciones = [
  { id: "001", perfect: 149, good: 1, fail: 0 },
  { id: "001", perfect: 125, good: 25, fail: 0 },
  { id: "002", perfect: 520, good: 60, fail: 20 },
  { id: "002", perfect: 540, good: 30, fail: 10 },
  { id: "003", perfect: 350, good: 40, fail: 10 },
  { id: "003", perfect: 320, good: 70, fail: 10 },
  { id: "004", perfect: 425, good: 20, fail: 5 },
  { id: "004", perfect: 405, good: 45, fail: 0 },
  { id: "005", perfect: 40, good: 10, fail: 0 },
  { id: "005", perfect: 45, good: 5, fail: 0 },
  { id: "006", perfect: 620, good: 150, fail: 30 },
  { id: "006", perfect: 620, good: 170, fail: 10 },
];

const botonAñadir = document.getElementById("añade");
botonAñadir.addEventListener("click", aListaPuntuaciones);
botonAñadir.removeAttribute("href");

function aListaPuntuaciones() {
  for (let i = valoresPuntuaciones.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [valoresPuntuaciones[i], valoresPuntuaciones[j]] = [valoresPuntuaciones[j], valoresPuntuaciones[i]];
  }
  const valores = valoresPuntuaciones.pop();
  const cancion = listaCanciones.find(({ id }) => id === valores.id);
  añadePuntuaciones(listaPuntuaciones, listaCanciones, valores.id, puntuación(valores.perfect, valores.good, cancion.notas), estado(valores.good, valores.fail));
  const fila = document.getElementById(valores.id)
  const mejorPuntuación = listaPuntuaciones.filter(p => valores.id.includes( p.id )).map( p => p.valor ).sort((a,b) => b - a)[0];
  fila.children[2].textContent = mejorPuntuación.toFixed(6).toString();
  fila.children[3].textContent = grado(mejorPuntuación);
  switch (cancion.estado) {
    case 1:
      fila.children[4].textContent = "Superado";
      break;
    case 2:
      fila.children[4].textContent = "Combo completo";
      break;
    case 3:
      fila.children[4].textContent = "Combo perfecto";
      break;
  }
  if (valoresPuntuaciones.length === 0) {
    botonAñadir.removeEventListener("click", aListaPuntuaciones);
    setTimeout(() => botonAñadir.setAttribute("href", "./form.html"), 500);
  }
}
*/
// Fin sección añadir datos uno a uno.
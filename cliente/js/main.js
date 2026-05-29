// TODO Hacer las llamadas a los metodos.
import { cantidadesValidas, puntuación, estado, filaTabla, añadePuntuaciones } from "./funciones.js";

const listaCanciones = [
  { id: "001", titulo: "Transcient love", dificultad: "1", notas: "150" },
  { id: "002", titulo: "Hall of the raving dragon", dificultad: "4", notas: "600" },
  { id: "003", titulo: "King of the disco", dificultad: "3", notas: "400" },
  { id: "004", titulo: "Festival night", dificultad: "2", notas: "450" },
  { id: "005", titulo: "Mad Jester", dificultad: "1", notas: "50" },
  { id: "006", titulo: "Revenge of the lonely princess", dificultad: "5", notas: "800" }
];

const listaPuntuaciones = []

const tablaCanciones = document.getElementsByTagName("table")[0];

listaCanciones.forEach(cancion => {
  let puntuación = 0;
  let estado = 0;
  // if (Object.keys(cancion).includes(estado)) {};
  const fila = filaTabla(cancion.titulo, cancion.dificultad, puntuación, estado);
  tablaCanciones.appendChild(fila);
});

// Para ver el funcionamiento

const valoresPuntuaciones = [
  { id: "001", perfect: 125, good: 25, fail: 0},
  { id: "002", perfect: 520, good: 60, fail: 20},
  { id: "003", perfect: 320, good: 70, fail: 10},
  { id: "004", perfect: 405, good: 40, fail: 5},
  { id: "005", perfect: 40, good: 10, fail: 0},
  { id: "006", perfect: 620, good: 150, fail: 30},
];

const botonAñadir = document.getElementById("añade");
botonAñadir.addEventListener("click", aListaPuntuaciones);

function aListaPuntuaciones(){
  if
}
import { cantidadesValidas, puntuación, estado, filaTabla, añadePuntuaciones, grado } from "./funciones.js";

const listaCanciones = [
  { id: "01", titulo: "Transcient princess", dificultad: "1", notas: 150, estado: 0 },
  { id: "02", titulo: "Hall of the raving dragon", dificultad: "4", notas: 600, estado: 0 },
  { id: "03", titulo: "King of the disco", dificultad: "3", notas: 400, estado: 0 },
  { id: "04", titulo: "Festival night", dificultad: "2", notas: 450, estado: 0 },
  { id: "05", titulo: "Mad Jester", dificultad: "1", notas: 50, estado: 0 },
  { id: "06", titulo: "Revenge of the lonely princess", dificultad: "5", notas: 800, estado: 0 },
  { id: "07", titulo: "Last song of the mandrake", dificultad: "4", notas: 770, estado: 0 },
  { id: "08", titulo: "The witching waltz", dificultad: "3", notas: 521, estado: 0 },
  { id: "09", titulo: "Feast at Tirnanog", dificultad: "4", notas: 639, estado: 0 },
  { id: "0A", titulo: "Lost city of the resonant creations", dificultad: "2", notas: 355, estado: 0 },
  { id: "0B", titulo: "Valley of the dreaded", dificultad: "5", notas: 852 , estado: 0 },
  { id: "0C", titulo: "Nyarlathotep", dificultad: "6", notas: 897 , estado: 0 },
];

const listaPuntuaciones = []

const tablaCanciones = document.getElementsByTagName("table")[0];

// Descomentar para añadir datos de forma automatica.
const valoresPuntuaciones = [
  { id: "01", perfect: 150, good: 0, fail: 0 },
  { id: "01", perfect: 125, good: 25, fail: 0 },
  { id: "02", perfect: 520, good: 60, fail: 20 },
  { id: "02", perfect: 540, good: 30, fail: 10 },
  { id: "03", perfect: 355, good: 40, fail: 5 },
  { id: "03", perfect: 320, good: 70, fail: 10 },
  { id: "04", perfect: 425, good: 20, fail: 5 },
  { id: "04", perfect: 405, good: 45, fail: 0 },
  { id: "05", perfect: 40, good: 10, fail: 0 },
  { id: "05", perfect: 49, good: 1, fail: 0 },
  { id: "06", perfect: 620, good: 150, fail: 30 },
  { id: "06", perfect: 620, good: 170, fail: 10 },
  { id: "07", perfect: 620, good: 130, fail: 20 },
  { id: "07", perfect: 690, good: 70, fail: 10 },
  { id: "08", perfect: 465, good: 56, fail: 0 },
  { id: "08", perfect: 480, good: 40, fail: 1 },
  { id: "09", perfect: 565, good: 50, fail: 24 },
  { id: "09", perfect: 550, good: 60, fail: 29 },
  { id: "0A", perfect: 320, good: 30, fail: 5 },
  { id: "0A", perfect: 340, good: 14, fail: 1 },
  { id: "0B", perfect: 750, good: 60, fail: 42 },
  { id: "0B", perfect: 716, good: 69, fail: 67 },
  { id: "0C", perfect: 700, good: 107, fail: 90 },
  { id: "0C", perfect: 680, good: 107, fail: 110 },
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
console.log(listaPuntuaciones);
// Fin sección añadir datos de forma automatica.

listaCanciones.forEach(cancion => {
  let puntuación = 0;
  if (cancion.estado !== 0) puntuación = listaPuntuaciones.filter(p => cancion.id.includes( p.id )).map( p => p.valor ).sort((a,b) => b - a)[0];
  const fila = filaTabla(cancion.id, cancion.titulo, cancion.dificultad, puntuación, cancion.estado);
  tablaCanciones.appendChild(fila);
});

// Descomentar para añadir datos uno a uno. Redundante si se añaden datos de forma automatica.
// const valoresPuntuaciones = [
//   { id: "01", perfect: 150, good: 0, fail: 0 },
//   { id: "01", perfect: 125, good: 25, fail: 0 },
//   { id: "02", perfect: 520, good: 60, fail: 20 },
//   { id: "02", perfect: 540, good: 30, fail: 10 },
//   { id: "03", perfect: 355, good: 40, fail: 5 },
//   { id: "03", perfect: 320, good: 70, fail: 10 },
//   { id: "04", perfect: 425, good: 20, fail: 5 },
//   { id: "04", perfect: 405, good: 45, fail: 0 },
//   { id: "05", perfect: 40, good: 10, fail: 0 },
//   { id: "05", perfect: 49, good: 1, fail: 0 },
//   { id: "06", perfect: 620, good: 150, fail: 30 },
//   { id: "06", perfect: 620, good: 170, fail: 10 },
//   { id: "07", perfect: 620, good: 130, fail: 20 },
//   { id: "07", perfect: 690, good: 70, fail: 10 },
//   { id: "08", perfect: 465, good: 56, fail: 0 },
//   { id: "08", perfect: 480, good: 40, fail: 1 },
//   { id: "09", perfect: 565, good: 50, fail: 24 },
//   { id: "09", perfect: 550, good: 60, fail: 29 },
//   { id: "0A", perfect: 320, good: 30, fail: 5 },
//   { id: "0A", perfect: 340, good: 14, fail: 1 },
//   { id: "0B", perfect: 750, good: 60, fail: 42 },
//   { id: "0B", perfect: 716, good: 69, fail: 67 },
//   { id: "0C", perfect: 700, good: 107, fail: 90 },
//   { id: "0C", perfect: 680, good: 107, fail: 110 },
// ];

// const botonAñadir = document.getElementById("añade");
// botonAñadir.addEventListener("click", aListaPuntuaciones);
// botonAñadir.removeAttribute("href");

// function aListaPuntuaciones() {
//   for (let i = valoresPuntuaciones.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [valoresPuntuaciones[i], valoresPuntuaciones[j]] = [valoresPuntuaciones[j], valoresPuntuaciones[i]];
//   }
//   const valores = valoresPuntuaciones.pop();
//   const cancion = listaCanciones.find(({ id }) => id === valores.id);
//   añadePuntuaciones(listaPuntuaciones, listaCanciones, valores.id, puntuación(valores.perfect, valores.good, cancion.notas), estado(valores.good, valores.fail));
//   const fila = document.getElementById(valores.id)
//   const mejorPuntuación = listaPuntuaciones.filter(p => valores.id.includes( p.id )).map( p => p.valor ).sort((a,b) => b - a)[0];
//   fila.children[2].textContent = mejorPuntuación.toFixed(6).toString();
//   fila.children[3].textContent = grado(mejorPuntuación);
//   fila.children[3].classList.remove("EX","A","B","C","D","E");
//   fila.children[3].classList.add(grado(mejorPuntuación));
//   fila.children[4].classList.remove("CP","CC","CS","NP");
//   switch (cancion.estado) {
//     case 1:
//       fila.children[4].textContent = "Superado";
//       fila.children[4].classList.add("CS");
//       break;
//     case 2:
//       fila.children[4].textContent = "Combo Completo";
//       fila.children[4].classList.add("CC");
//       break;
//     case 3:
//       fila.children[4].textContent = "Combo Perfecto";
//       fila.children[4].classList.add("CP");
//       break;
//   }
//   if (valoresPuntuaciones.length === 0) {
//     botonAñadir.removeEventListener("click", aListaPuntuaciones);
//     setTimeout(() => botonAñadir.setAttribute("href", "./form.html"), 500);
//   }
// }
// Fin sección añadir datos uno a uno.
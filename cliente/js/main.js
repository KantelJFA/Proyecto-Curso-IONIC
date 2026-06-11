import { cantidadesValidas, puntuación, estado, añadirFilaTabla, añadePuntuaciones, grado } from "./funciones.js";

// FALTA AÑADIR MÁS CANCIONES
// Al menos un 2, un 5, y unos cuantos 3 y 4

const listaCanciones = [
  { id: "00", titulo: "Welcome, legendary bard", dificultad: "2", notas: 159, estado: 0 },
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
  { id: "0D", titulo: "Woods of the endless party", dificultad: "3", notas: 377, estado: 0 },
  { id: "0E", titulo: "Legends of the sacred dance", dificultad: "4", notas: 488, estado: 0 },
  { id: "0F", titulo: "The old rites of Gradgordur", dificultad: "5", notas: 561, estado: 0 },
];

const listaPuntuaciones = [];
const JSONPuntuaciones = JSON.parse(sessionStorage.getItem("listadoPuntuaciones"))
const JSONEstados = JSON.parse(sessionStorage.getItem("mejoresEstados"));
try {
  JSONPuntuaciones.forEach(elem => listaPuntuaciones.push(elem));
  listaCanciones.forEach(elem => elem.estado = JSONEstados.find(({ id }) => id === elem.id).estado);
} catch (error) {
  console.log("No hay datos guardados");
}

console.log(JSONPuntuaciones);

const tablaCanciones = document.getElementsByTagName("table")[0];
const selectCanciones = document.getElementById("canciones");
const listado = document.getElementById("listado");
const formulario = document.getElementById("formulario");
// listado.style.display = "block";
// formulario.style.display = "none";

// FALTA EVENTO DE CAMBIO DE VISTA
// Tambien falta una vista con las 10 canciones con las puntuaciones más altas.

// Descomentar para añadir datos de forma automatica.
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
// for (let i = valoresPuntuaciones.length - 1; i >= 0; i--) {
//   if (i > 0) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [valoresPuntuaciones[i], valoresPuntuaciones[j]] = [valoresPuntuaciones[j], valoresPuntuaciones[i]];
//   }
//   const valores = valoresPuntuaciones.pop();
//   const cancion = listaCanciones.find(({ id }) => id === valores.id);
//   añadePuntuaciones(listaPuntuaciones, listaCanciones, valores.id, puntuación(valores.perfect, valores.good, cancion.notas), estado(valores.good, valores.fail));
// }
// Fin sección añadir datos de forma automatica.

listaCanciones.forEach(cancion => {
  const option = document.createElement("option");
  let puntuación = 0;
  if (cancion.estado !== 0) puntuación = listaPuntuaciones.filter(p => cancion.id.includes( p.id )).map( p => p.valor ).sort((a,b) => b - a)[0];
  const fila = añadirFilaTabla(cancion.id, cancion.titulo, cancion.dificultad, puntuación, cancion.estado);
  option.textContent = cancion.titulo;
  option.setAttribute("value",cancion.id);
  tablaCanciones.appendChild(fila);
  selectCanciones.appendChild(option);
});

console.log(listaCanciones);
console.log(listaPuntuaciones);

// FALTA VALIDAR LOS DATOS
// En este caso, asegurarse de que hay una canción seleccionada, y de que se ha introducido el numero correcto de notas.

function validar() {
  const cancion = listaCanciones.find(({ id }) => id === document.getElementById("canciones").value);
  const perfecto = Number(document.getElementById("perfecto").value);
  const bien = Number(document.getElementById("bien").value);
  const fallos = Number(document.getElementById("fallo").value);
  const validado = cantidadesValidas(perfecto, bien, fallos, cancion.notas);
  if (validado) añadir(cancion, perfecto, bien, fallos);
  return validado;
}

function añadir(cancion, perfecto, bien, fallos) {
  const puntuaciónActual = puntuación(perfecto, bien, cancion.notas);
  const estadoPuntuacion = estado(bien, fallos);
  añadePuntuaciones(listaPuntuaciones, listaCanciones, cancion.id, puntuaciónActual, estadoPuntuacion);
  sessionStorage.setItem("listadoPuntuaciones",JSON.stringify(listaPuntuaciones));
  const mejoresEstados = [];
  for (const item of listaCanciones) {
    mejoresEstados.push({ id: item.id, estado: item.estado });
  }
  console.log(mejoresEstados);
  sessionStorage.setItem("mejoresEstados",JSON.stringify(mejoresEstados));
}

formulario.addEventListener("submit", validar);
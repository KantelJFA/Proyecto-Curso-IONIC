/**
 * Valida que la cantidad de perfectos, bien, y fallos sea igual a la del total de notas.
 * 
 * @param { number } perfectos Notas acertadas con la maxima precisión.
 * @param { number } bien Notas acertadas sin la maxima precision.
 * @param { number } fallos Notas no acertadas.
 * @param { number } notasTotales Total de notas de la canción
 * @returns { boolean } 
 */
export function cantidadesValidas(perfectos, bien, fallos, notasTotales) {
  let valido;
  if (perfectos + bien + fallos == notasTotales) valido = true;
  else valido = false;
  return valido
}

/**
 * Calcula la puntuación obtenida.
 * 
 * @param { number } perfectos Notas acertadas con la maxima precisión.
 * @param { number } bien Notas acertadas sin la maxima precision.
 * @param { number } notasTotales Total de notas de la canción.
 * @returns { number } Puntuación obtenida.
 */
export function puntuación(perfectos, bien, notasTotales) {
  const valorNotas = 100/notasTotales;
  const puntuación = (perfectos + bien / 2) * valorNotas;
  return puntuación;
};

/**
 * Determina como ha sido completada la canción.
 * 
 * @param { number } bien Notas acertadas sin la maxima precision.
 * @param { number } fallos Notas no acertadas.
 * @returns { number } Valor numerico del estado.
 */
export function estado(bien, fallos) {
  let estado = 1; // "Superado"
  if (fallos == 0) {
    estado += 1; // "Combo completo"
    if (bien == 0) estado += 1; // "Combo perfecto"
  };
  return estado;
};

/**
 * Calcula la graduación en base a la puntuación recibida.
 * 
 * @param { number } puntuación La puntuación a valorar.
 * @returns { string } Grado obtenido.
 */
function grado(puntuación) {
  let grado;
  if (puntuación >= 92) { // EX, A, B
    if (puntuación >= 98) grado = "EX";
    else if (puntuación >= 95) grado = "A";
    else grado = "B";
  } else { // C, D, E
    if (puntuación >= 89) grado = "C"
    else if (puntuación >= 86) grado = "D";
    else grado = "E";
  };
  return grado;
};

/**
 * Crea las filas de la tabla de canciones.
 * 
 * @param { string } titulo Titulo de la canción.
 * @param { string } dificultad Dificultad de la canción.
 * @param { number } puntuación Puntuación maxima obtenida.
 * @param { number } estado Mejor estado de compleción obtenido.
 * @returns { HTMLTableRowElement } Fila de la tabla.
 */
export function filaTabla (titulo, dificultad, puntuación, estado) {
  const fila = document.createElement("tr");
  const celdaTitulo = document.createElement("th");
  celdaTitulo.textContent = titulo;
  const celdaDificultad = document.createElement("th");
  celdaDificultad.textContent = dificultad;
  const celdaPuntuación = document.createElement("th");
  celdaPuntuación.textContent = puntuación.toFixed(6).toString();
  const celdaGrado = document.createElement("th");
  celdaGrado.textContent = grado(puntuación).toString();
  const textoEstado = document.createElement("th");
  switch (estado) {
    case 1:
      textoEstado.textContent = "Superado"
      break;
    case 2:
      textoEstado.textContent = "Combo completo"
      break;
    case 3:
      textoEstado.textContent = "Combo perfecto"
      break;
    default:
      textoEstado.textContent = "No jugada";
      break;
  }
  fila.appendChild(celdaTitulo);
  fila.appendChild(celdaDificultad);
  fila.appendChild(celdaPuntuación);
  fila.appendChild(celdaGrado);
  fila.appendChild(textoEstado);
  return fila;
}

export function añadePuntuaciones(id, puntuación){

};
export function cantidadesValidas(perfectos, bien, fallos, notasTotales) {
  let valido;
  if (perfectos + bien + fallos == notasTotales) valido = true;
  else valido = false;
  return 
}

export function puntuación(perfectos, bien, notasTotales) {
  const valorNotas = 100000000/notasTotales;
  return perfectos * valorNotas + bien * valorNotas / 2;
};

export function estado(bien, fallos) {
  let estado;
  if (fallos == 0) {
    if (bien == 0) estado = "Combo perfecto";
    else estado = "Combo completo";
  } else estado = "Superado";
  return estado;
};

export function grado(puntuación) {
  let grado;
  if (puntuación >= 92000000) {
    if (puntuación >= 98000000) grado = "EX";
    else if (puntuación >= 95000000) grado = "A";
    else grado = "B";
  } else {
    if (puntuación >= 89000000) grado = "C"
    else if (puntuación >= 86000000) grado = "A";
    else grado = "E";
  };
  return grado;
};
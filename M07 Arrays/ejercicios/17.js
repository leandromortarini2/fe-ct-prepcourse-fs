function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:
  let array = [];
  let tabla = 0;
  for (let i = 0; i <= 10; i++) {
    tabla = i * 6;
    array.push(tabla);
  }
  return array;
}
tablaDelSeis();
module.exports = tablaDelSeis;

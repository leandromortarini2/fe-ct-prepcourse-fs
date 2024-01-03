function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  // Crear un nuevo array para almacenar los resultados
  var resultado = [];

  // Iterar sobre cada elemento del array y multiplicarlo por su índice
  for (var i = 0; i < array.length; i++) {
    resultado.push(array[i] * i);
  }

  // Devolver el nuevo array con los resultados
  return resultado;
}

module.exports = multiplicarElementosPorIndice;

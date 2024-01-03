function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el aray es vacío o si no hay números faltantes.
  // Tu código:

  let comparador = numeros[0];

  for (let i = 0; i < numeros.length; i++) {
    if (comparador === numeros[i]) {
      comparador += 1;
    } else {
      return comparador;
    }
  }
  return null;
}

module.exports = encontrarNumeroFaltante;

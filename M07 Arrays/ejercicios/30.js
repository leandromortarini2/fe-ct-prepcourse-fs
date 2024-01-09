function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  for (let i = 0; i < numeros.length; i++) {
    for (let i2 = i + 1; i2 < numeros.length; i2++) {
      if (numeros[i2] === numeros[i]) {
        return numeros[i2];
      }
    }
  }
}

module.exports = encontrarElementoRepetido;

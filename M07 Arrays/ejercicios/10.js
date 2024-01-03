function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:

  // Inicializa variables para mantener el índice y el valor del número más grande
  let indiceMasGrande = 0;
  let numeroMasGrande = array[0];

  // Itera sobre el array para encontrar el número más grande y su índice
  for (let i = 1; i < array.length; i++) {
    if (array[i] > numeroMasGrande) {
      numeroMasGrande = array[i];
      indiceMasGrande = i;
    }
  }

  // Retorna el índice del número más grande
  return indiceMasGrande;
}

module.exports = encontrarIndiceMayor;

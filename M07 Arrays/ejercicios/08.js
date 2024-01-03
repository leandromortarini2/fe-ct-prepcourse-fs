function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  // Utiliza filter para obtener solo los números pares del array
  const numerosPares = array.filter(function (elemento) {
    // Filtra solo los elementos que son números pares
    return typeof elemento === "number" && elemento % 2 === 0;
  });

  return numerosPares; // Retorna el nuevo array con números pares
}

module.exports = filtrarNumerosPares;

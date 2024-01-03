function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  // Comparar cada elemento con el primero
  for (var i = 1; i < array.length; i++) {
    if (array[i] !== array[0]) {
      return false; // Si encuentra un elemento diferente, retorna false
    }
  }

  // Si ha llegado hasta aquí, todos los elementos son iguales
  return true;
}

module.exports = todosIguales;

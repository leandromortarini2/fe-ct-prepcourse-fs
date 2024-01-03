function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:

  for (let i = 0; i < array.length; i++) {
    const elemento = array[i];
    if (typeof elemento === "string" && elemento.length > 5) {
      return elemento;
    }
  }
  return undefined;
}

module.exports = obtenerPrimerStringLargo;

function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:

  // Utiliza map para aplicar toUpperCase a cada string del array
  const arrayMayusculas = array.map(function (elemento) {
    // Verifica si el elemento es un string antes de llamar a toUpperCase
    if (typeof elemento === "string") {
      return elemento.toUpperCase();
    } else {
      // Si no es un string, devuelve el elemento sin cambios
      return elemento;
    }
  });

  return arrayMayusculas; // Retorna el nuevo array con strings en mayúsculas
}

module.exports = convertirStringAMayusculas;

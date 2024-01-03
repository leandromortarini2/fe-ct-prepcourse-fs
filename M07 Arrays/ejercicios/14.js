function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:
  // Verificar si no se pasaron argumentos
  if (arguments.length === 0) {
    return 0;
  }

  // Si se pasa un solo argumento, retornarlo directamente
  if (arguments.length === 1) {
    return arguments[0];
  }

  // Inicializar el producto con el primer argumento
  var producto = arguments[0];

  // Iterar sobre los demás argumentos y multiplicarlos
  for (var i = 1; i < arguments.length; i++) {
    producto *= arguments[i];
  }

  // Retornar el producto final
  return producto;
}

module.exports = multiplicarArgumentos;

function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  if (typeof a !== "number" || typeof b !== "number" || a < 0 || b < 0) {
    return 0;
  }
  // Verificar si a es mayor que b
  if (a > b) {
    return "El primer número debe ser menor o igual al segundo número.";
  }
  // Inicializar el producto como 1
  let producto = 1;
  // Iterar desde a hasta b e ir multiplicando el producto
  for (let i = a; i <= b; i++) {
    producto *= i;
  }
  return producto;
}

module.exports = productoEntreNúmeros;

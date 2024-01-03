function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
  let multiplicados = array.map((x) => x * 2);
  return multiplicados;
}

module.exports = duplicarElementos;

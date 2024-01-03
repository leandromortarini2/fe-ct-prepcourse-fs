function devolverUltimoElemento(array) {
  // Retornar el último elemento del arreglo recibido.
  // Tu código:
  let ubicacion = 0;

  for (let i = 0; i < array.length; i++) {
    ubicacion = array[i];
  }
  return ubicacion;
}

module.exports = devolverUltimoElemento;

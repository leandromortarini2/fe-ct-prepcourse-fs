function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:

  var mesesBuscados = ["Enero", "Marzo", "Noviembre"];
  // Nuevo array para almacenar los meses encontrados
  var mesesEncontrados = [];
  // Recorrer el array desordenado
  for (var i = 0; i < array.length; i++) {
    var mesActual = array[i];
    // Verificar si el mes actual está en la lista de meses buscados
    if (mesesBuscados.includes(mesActual)) {
      mesesEncontrados.push(mesActual);
    }
  }
  // Verificar si se encontraron todos los meses
  if (mesesEncontrados.length === mesesBuscados.length) {
    return mesesEncontrados;
  } else {
    return "No se encontraron los meses pedidos";
  }
}

module.exports = mesesDelAño;

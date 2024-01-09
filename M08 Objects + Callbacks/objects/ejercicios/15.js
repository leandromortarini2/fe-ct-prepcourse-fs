function tienePropiedad(objeto, propiedad) {
  // Verifica si el objeto recibido posee una propiedad con el mismo nombre que el parámetro "propiedad".
  // En ese caso, retorna true. Caso contrario, false.
  // Tu código:
  // console.log("================>", prop);

  for (let prop in objeto) {
    console.log("================>", prop);

    if (prop !== propiedad) {
      console.log("================>", prop !== propiedad);

      return false;
    } else {
      return true;
    }
  }
}

module.exports = tienePropiedad;

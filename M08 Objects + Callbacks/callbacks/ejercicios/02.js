function cambiarCadena(string, callback) {
  // Aplica la función de callback al string y devuelve el resultado.
  // La función de callback se encargará de recibir el string y devolverlo con los cambios.
  // Tu código:
  console.log("=========================>", string, callback);
  if (callback) {
    console.log("=========================>", callback(string));
    return callback(string);
  } else {
    console.log("=========================>", string);
    return string;
  }

  // console.log("=========================>", string);
  // console.log("=========================>", callback(string));
}

module.exports = cambiarCadena;

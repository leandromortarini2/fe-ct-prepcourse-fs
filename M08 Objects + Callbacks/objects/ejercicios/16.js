function verificarPassword(objetoUsuario, password) {
  // Verifica si la propiedad "password" del "objetoUsuario" coincide con el parámetro "password".
  // En ese caso, retorna true. Caso contrario, false.
  // Tu código:
  // console.log("================>", objetoUsuario[password]);

  for (let contrasena in objetoUsuario) {
    console.log("================>", objetoUsuario[contrasena]);

    if (objetoUsuario[contrasena] === password) {
      console.log("================>", password);

      return true;
    }
  }
  return false;
}

module.exports = verificarPassword;

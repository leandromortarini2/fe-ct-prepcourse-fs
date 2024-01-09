function tieneEmail(objetoUsuario) {
  // Verifica si el "objetoUsuario", en su propiedad "email", posee un valor definido.
  // En ese caso, retorna true. Caso contrario, false.
  // Tu código:
  if (objetoUsuario["email"] === null || objetoUsuario["email"] === undefined) {
    console.log("================>", objetoUsuario["email"]);
    return false;
  } else {
    return true;
  }
}

module.exports = tieneEmail;

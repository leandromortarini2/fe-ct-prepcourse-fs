function pasarUsuarioAPremium(objetoMuchosUsuarios) {
  // El parámetro "objetoMuchosUsuarios" es un arreglo de objetos (usuarios).
  // Cada usuario tiene una propiedad llamada "esPremium".
  // Define esta propiedad de todos los usuarios como true.
  // Retornar el arreglo.
  // Tu código:
  // objetoMuchosUsuarios["esPremium"] = true;
  console.log("================>", objetoMuchosUsuarios);

  objetoMuchosUsuarios.forEach((element) => {
    element.esPremium = true;
  });
  console.log("================>", objetoMuchosUsuarios);

  return objetoMuchosUsuarios;
}

module.exports = pasarUsuarioAPremium;

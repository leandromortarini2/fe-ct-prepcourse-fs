const obtenerValorPropiedad = (objeto, propiedad) => {
  // Recibe un objeto y el nombre de una propiedad.
  // Devuelve el valor de esta propiedad.
  // Tu código:

  console.log("=================D", obj);

  for (obj in objeto) {
    console.log("=================D", obj);
    console.log("=================D", objeto[obj]);
  }
  return objeto.obj;
};

module.exports = obtenerValorPropiedad;

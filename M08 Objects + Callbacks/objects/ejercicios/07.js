// Crea un objeto con propiedades anidadas y un método que acceda a una de las propiedades anidadas utilizando `this`.
const objetoAnidado = {
  nombre: "ivan",
  edad: 19,
  metodo: function saludar() {
    return "hola" + this.propiedad1.direccion;
  },
  propiedad1: {
    direccion: "malaCalle",
    altura: 1550,
  },
  propiedad2: {
    direccion: "malaCalle",
    altura: 1550,
  },
  propiedad3: {
    direccion: "malaCalle",
    altura: 1550,
    propiedad4: {
      direccion: "malaCalle",
      altura: 1550,
    },
    propiedad5: {
      direccion: "malaCalle",
      altura: 1550,
    },
    propiedad6: {
      direccion: "malaCalle",
      altura: 1550,
      propiedad9: function () {
        return "valor7";
      },
    },
  },
};

module.exports = objetoAnidado;

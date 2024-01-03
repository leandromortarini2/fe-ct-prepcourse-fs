function diasEnMes(mes) {
  // La función recibe un mes(número) por argumento.
  // Determine cúantos días tiene el mes correspondiente a ese número.
  // PISTA: Usa un bucle do-while para validar que el mes ingresado sea válido.
  // Tu código:
  let dias;

  // Bucle do-while para validar que el mes esté en el rango válido (1-12)
  do {
    if (mes >= 1 && mes <= 12) {
      // Utilizar un switch para asignar la cantidad de días en el mes correspondiente
      switch (mes) {
        case 2:
          dias = 28; // Se asume que el año no es bisiesto
          break;
        case 4:
        case 6:
        case 9:
        case 11:
          dias = 30;
          break;
        default:
          dias = 31;
          break;
      }
    }
  } while (!(mes >= 1 && mes <= 12));

  return dias;
}

module.exports = diasEnMes;

function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:
  const stringSinEspacios = string.replace(/\s/g, "").toLowerCase();

  // Invierte el string
  const stringInvertido = stringSinEspacios.split("").reverse().join("");

  // Compara el string original con su versión invertida
  return stringSinEspacios === stringInvertido;
}

module.exports = esPalindromo;

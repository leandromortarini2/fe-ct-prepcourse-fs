function esAnagrama(str1, str2) {
  // La función recibe dos argumentos "str1" y "str2" que son strings.
  // Determina si los dos strings son anagramas.
  // Devuelve true de ser así, sino retorna false.
  // IMPORTANTE: Un anagrama es una palabra que se forma
  // con las mismas letras que otra, pero en orden diferente.
  // Tu código:

  // Elimina espacios y convierte a minúsculas
  const cadena1 = str1.replace(/\s/g, "").toLowerCase();
  const cadena2 = str2.replace(/\s/g, "").toLowerCase();

  // Convierte cada cadena en un array, lo ordena y lo convierte de nuevo a string
  const cadenaOrdenada1 = cadena1.split("").sort().join("");
  const cadenaOrdenada2 = cadena2.split("").sort().join("");

  // Compara las cadenas ordenadas
  return cadenaOrdenada1 === cadenaOrdenada2;
}

module.exports = esAnagrama;

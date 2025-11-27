function getInitials(nomeCompleto) {
  const [nome, cognome] = nomeCompleto.split(" ").filter((str) => str !== "");
  return `${nome.charAt(0).toUpperCase()}.${cognome.charAt(0).toUpperCase()}.`;
}

function createSlug(str) {
  if (!str) {
    throw new Error("Titolo non valido");
  }
  return str.toLowerCase().replaceAll(" ", "-");
}

function average(numeri) {
  return numeri.reduce((acc, numero) => acc + numero, 0) / numeri.length;
  //   let somma = 0;
  //   numeri.forEach((numero) => {
  //     somma = somma + numero;
  //   });
  //   return somma / numeri.length;
}

function isPalindrome(parola) {
  const parolaInversa = parola.trim().split("").reverse().join("");
  return parola.trim() === parolaInversa;
}

module.exports = {
  getInitials,
  createSlug,
  average,
  isPalindrome,
};

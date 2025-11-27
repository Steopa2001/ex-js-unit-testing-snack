function getInitials(nomeCompleto) {
  const [nome, cognome] = nomeCompleto.split(" ").filter((str) => str !== "");
  return `${nome.charAt(0).toUpperCase()}.${cognome.charAt(0).toUpperCase()}.`;
}

function createSlug(str) {
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
  const parolaInversa = parola.split("").reverse().join("");
  return parola === parolaInversa;
}


module.exports = {
  getInitials,
  createSlug,
  average,
  isPalindrome, 
};

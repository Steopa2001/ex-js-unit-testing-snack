function getInitials(nomeCompleto) {
  const [nome, cognome] = nomeCompleto.split(" ").filter((str) => str !== "");
  return `${nome.charAt(0).toUpperCase()}.${cognome.charAt(0).toUpperCase()}.`;
}

function createSlug(str) {
  return str.toLowerCase();
}

function average(numeri) {
  return numeri.reduce((acc, numero) => acc + numero, 0) / numeri.length;
  //   let somma = 0;
  //   numeri.forEach((numero) => {
  //     somma = somma + numero;
  //   });
  //   return somma / numeri.length;
}

module.exports = {
  getInitials,
  createSlug,
  average,
};

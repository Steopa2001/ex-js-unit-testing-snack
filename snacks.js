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

function findPostById(posts, id) {
  if (isNaN(id)) {
    throw new Error(`"${id}" non è un id`);
  }
  posts.forEach((p) => {
    if (p.id === undefined || p.title === undefined || p.slug === undefined) {
      throw new Error(`l'Array posts non è nel formato corretto.`);
    }
  });
  return posts.find((p) => p.id === id) || null;
}

module.exports = {
  getInitials,
  createSlug,
  average,
  isPalindrome,
  findPostById,
};

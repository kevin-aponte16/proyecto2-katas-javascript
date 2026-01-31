function rollDice(caras) {
  const resultado = Math.floor(Math.random() * caras) + 1;
  return resultado;
}
function validateHello(greetings) {
  return /h[ae]llo|ciao|salut|hola|ahoj|czesc/i.test(greetings);
}

export default validateHello;

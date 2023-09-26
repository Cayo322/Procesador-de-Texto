const textProcessor = require('./textprocess');

const texto = 'Messi es el MEJOR del mundo 10';

console.log('Palabras divididas:', textProcessor.splitWords(texto));
console.log('Subcadena:', textProcessor.extractSubstring(texto, 5, 10));
console.log('Sin espacios:', textProcessor.removeSpaces(texto));
console.log('Capitalizado:', textProcessor.capitalize(texto));
console.log('Minúsculas:', textProcessor.toLowerCase(texto));
console.log('Mayúsculas:', textProcessor.toUpperCase(texto));
console.log('Conteo de caracteres:', textProcessor.countCharacters(texto));

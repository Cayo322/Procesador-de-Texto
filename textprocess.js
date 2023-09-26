
function splitWords(text) {
    return text.split(' ');
  }
  
  // cadena
  function extractSubstring(text, startIndex, endIndex) {
    return text.slice(startIndex, endIndex);
  }
  
  // eliminar espacios
  function removeSpaces(text) {
    return text.replace(/\s/g, '');
  }
  
  //capitalizar la primera letra
  function capitalize(text) {
    return text
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
  
  //  convertir a minúsculas
  function toLowerCase(text) {
    return text.toLowerCase();
  }
  
  //  convertir a mayúsculas
  function toUpperCase(text) {
    return text.toUpperCase();
  }
  
  //  contar caracteres
  function countCharacters(text) {
    return text.length;
  }
  
  module.exports = {
    splitWords,
    extractSubstring,
    removeSpaces,
    capitalize,
    toLowerCase,
    toUpperCase,
    countCharacters,
  };
  
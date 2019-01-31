window.cipher = {

  alphabet : "ABCDEFGHIJKLMNOPQRSTUVWXYZ",

  encode(offset, msgOriginal) {
    const alphabetSize = window.cipher.alphabet.length;
    let msgEncode = "";
    for (let i= 0; i<= msgOriginal.length-1; i++) {
      if (msgOriginal[i] == " ") {
        msgEncode += " ";
      } else {
        let pos = (msgOriginal.charCodeAt(i) - "A".charCodeAt(0) + offset) % alphabetSize;
        msgEncode += window.cipher.alphabet[pos];
      }
    }

    return msgEncode;
  },

  decode(offset,  msgCodificado) {
    const alphabetSize = window.cipher.alphabet.length;
    let msgDecoded = "";
    for (let i= 0; i<=  msgCodificado.length-1; i++) {
      if (msgCodificado[i] == " ") {
        msgDecoded += " ";
      } else {
        let pos = (msgCodificado.charCodeAt(i) + "A".charCodeAt(0) - offset) % alphabetSize;
        msgDecoded += window.cipher.alphabet[pos];
      }
    }
    return msgDecoded;
  }
};


// playground
let msgOriginal = "HOLA MUNDO CRUEL";
let msgEncoded = window.cipher.encode(3, msgOriginal);
console.log("mensaje cifrado = " + msgEncoded);

let msgDecoded = window.cipher.decode(3, msgEncoded);

console.log("mensaje original " + msgDecoded);

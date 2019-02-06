window.cipher = {

  alphabet : "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  alphabet2: "abcdefghijklmnopqrstuvwxyz",

  encode(offset, msgOriginal) {
    const alphabetSize = window.cipher.alphabet.length;
    let msgEncode = "";
    for (let i= 0; i<= msgOriginal.length-1; i++) {
      if (msgOriginal[i] == " ") {
        msgEncode += " ";
      } else if (msgOriginal.charCodeAt(i) >= "65" && msgOriginal.charCodeAt(i) <= "90") {
        let pos = (msgOriginal.charCodeAt(i) - "A".charCodeAt(0) + offset) % alphabetSize;
        msgEncode += window.cipher.alphabet[pos];
      } else if ( msgOriginal.charCodeAt(i) >= "97" && msgOriginal.charCodeAt(i) <= "122") {
        let pos = (msgOriginal.charCodeAt(i) - "a".charCodeAt(0) + offset) % alphabetSize;
        msgEncode += window.cipher.alphabet2[pos];
      } else {
        msgEncode += msgOriginal[i];
      }
    }
    return msgEncode;
  },

 decode(offset, msgCodificado) {
    const alphabetSize = window.cipher.alphabet.length;
    let msgDecoded = "";
    for (let i= 0; i<= msgCodificado.length-1; i++) {
      if (msgCodificado[i] == " ") {
        msgDecoded += " ";
      } else if (msgCodificado.charCodeAt(i) >= "65" && msgCodificado.charCodeAt(i) <= "90"){
        let pos = (msgCodificado.charCodeAt(i) + "A".charCodeAt(0) - offset) % alphabetSize;
        msgDecoded += window.cipher.alphabet[pos];
      } else if (msgCodificado.charCodeAt(i) >= "97" && msgCodificado.charCodeAt(i) <= "122") {
        let pos = (msgCodificado.charCodeAt(i) - "a".charCodeAt(0) - offset) % alphabetSize;
        pos = (pos + alphabetSize)%alphabetSize;
        msgDecoded += window.cipher.alphabet2[pos];
      } else {
        msgDecoded += msgCodificado[i];
      }
    }
    return msgDecoded;
  }
};


 //playground
 let msgOriginal = "Hola Mundo Cruel!";
 let msgEncoded = window.cipher.encode(3, msgOriginal);
 console.log("mensaje cifrado = " + msgEncoded);
 let msgDecoded = window.cipher.decode(3, msgEncoded);

 console.log("mensaje original " + msgDecoded);

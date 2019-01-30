window.cipher = {

   encode(offset, msgOriginal) {
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const alphabetSize = alphabet.length;
    let msgEncode = "";
    for (let i= 0; i<= msgOriginal.length-1; i++) {
      if (msgOriginal[i] == " ") {
          msgEncode += " ";
       } else {
         let pos = (msgOriginal.charCodeAt(i) - "A".charCodeAt(0) + offset) % alphabetSize;
         msgEncode += alphabet[pos];
       }
    }

    return msgEncode;
  },

    decode(offset,  msgCodificado) {
     let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
     const alphabetSize = alphabet.length;
     let msgDecoded = "";
     for (let i= 0; i<=  msgCodificado.length-1; i++) {
       if (msgCodificado[i] == " ") {
           msgDecoded += " ";
        } else {
          let pos = (msgCodificado.charCodeAt(i) + "A".charCodeAt(0) - offset) % alphabetSize;
          msgDecoded += alphabet[pos];
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

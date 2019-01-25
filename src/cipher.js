window.cipher = {

  encode(offset, string){
    console.log("calling encode");
    return "fsdjkhf";
  },

  decode(offset, string){
    console.log("calling decode");

    return "jhfkjd";
  }

};

// playground
let msgOriginal = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let msgEncoded = window.cipher.encode(3, msgOriginal);
console.log("mensaje cifrado = " + msgEncoded);
let msgDecoded = window.cipher.decode(3, msgEncoded);

console.log("mensaje original" + msgDecoded);

function btnStart (){
  document.getElementById("Elegir").style.display = "block";
  document.getElementById("Bienvenida").style.display="none";

 }

document.getElementById("startBtn").addEventListener("click", btnStart);

function btnCifrar (){
  document.getElementById("Cifrar").style.display = "block";
  document.getElementById("Elegir").style.display="none";

 }

document.getElementById("botonTipoA").addEventListener("click", btnCifrar);

function btnDescifrar (){
  document.getElementById("Descifrar").style.display = "block";
  document.getElementById("Elegir").style.display="none";

 }

document.getElementById("botonTipoB").addEventListener("click", btnDescifrar);

function encode(){
  let msg = document.getElementById("cajaMensajeCifrar").value;
  let offset = parseInt(document.getElementById("cajaOffsetCifrar").value);
  let encodedMsg = window.cipher.encode(offset, msg);
  document.getElementById("mensajeCifrado").innerHTML = encodedMsg;
}

document.getElementById("botonSend1").addEventListener("click", encode);

function decode(){
  let msg = document.getElementById("cajaMensajeDescifrar").value;
  let offset = parseInt (document.getElementById("cajaOffsetDescifrar").value);
  let encodedMsg = window.cipher.decode(offset, msg);
  document.getElementById("mensajeDescifrado").innerHTML = encodedMsg;
}

document.getElementById("botonSend2").addEventListener("click", decode);

function goOut(){
  document.getElementById("Salir").style.display = "block";
  document.getElementById("Cifrar").style.display = "none";
  document.getElementById("Descifrar").style.display = "none";
}
document.getElementById("botonNo1").addEventListener("click", goOut);
document.getElementById("botonNo2").addEventListener("click", goOut);

function goStart(){
  document.getElementById("Elegir").style.display = "block";
  document.getElementById("Cifrar").style.display = "none";
  document.getElementById("Descifrar").style.display = "none";
}

 function clear(){
   document.getElementById("cajaMensajeDescifrar").value = "";
   document.getElementById("cajaOffsetDescifrar").value = "";
   document.getElementById("mensajeDescifrado").innerHTML = "";

   document.getElementById("cajaMensajeCifrar").value = "";
   document.getElementById("cajaOffsetCifrar").value = "";
   document.getElementById("mensajeCifrado").innerHTML = "";
 }

document.getElementById("botonSi1").addEventListener("click", goStart);
document.getElementById("botonSi1").addEventListener("click", clear);
document.getElementById("botonSi2").addEventListener("click", goStart);
document.getElementById("botonSi2").addEventListener("click", clear);

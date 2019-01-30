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

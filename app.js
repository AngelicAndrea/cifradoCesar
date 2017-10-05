function cipher(frase) {
  var result = "";
  for(var i = 0; i<frase.length;i++){//recorre la cadena
    var a = (frase.charCodeAt(i)-65+33)%26+65//me indica el valor Unidoce del caracter
    var b = String.fromCharCode(a);//con la var a que tiene las posiciones con el fromCharCode los traspasa a Unidoce
    result+=b
  }
  console.log(result+=b);
}
function decipher(frase) {
  var result = "";
  for (var i = 0; i < frase.length; i++) {
    var c = (frase.charCodeAt(i)-23+26)%26//con el Codificado me debe devolver la frase original, pero me devuleve unos signos raros
    var d = String.fromCharCode(c);
    result+=d
  }
  console.log(result+=d);
}




/*function cipher(frase) {
  do {var frase = prompt("Escribe tu frase");//me muestra el pantallazo hasta que esciba una frase. Luego de escribir una frase y me de la respuesta la seguira ejecutando.
} while (frase==="");//si al poner aceptar sin ninguna frase, me sigue mostrando "Escibe tu frase"
var resultado = ""; // se crea un Var para que ahí se ingrese el texto Codificado.
for (var i = 0; i < frase.length; i++){ //Realiza un recorrido de caracter por caracter de mi frase.
  var txt1 = (frase.charCodeAt(i)-65+33)%26+65// me dice el valor Unicode y su posición
  var txt2 = String.fromCharCode(txt2);// la posición de Unicode la pasa a cadena

}
return resultado+=txt2;
}*/

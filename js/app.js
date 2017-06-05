$(document).ready(function() {
    $('select').material_select();
         
  });
var crypt = (texto,clave)=>{
  var diff = texto.length - clave.length;
  //checar tamaño de bloque
  if(diff>0){
    clave += clave.substring(0,diff);
  }

  // console.log(clave);
  var textArr=[];
  var textArrFinal=[];
  var textArrOdd=[]
  var textArrEven=[]
  var claveArr=[];
  var textoCifrado;
  var cifrado=[];

  for(var x=0;x<texto.length;x++){
    //convertir a ascii y luego a binario
    textArr.push((texto.charCodeAt(x)))//>>>0).toString(2));
    // console.log(textArr[x]);
  }
  // console.log("------------");
  for(var x=0;x<clave.length;x++){
    //convertir a ascii y luego a binario
    claveArr.push((clave.charCodeAt(x)))//>>>0).toString(2));
    // console.log(claveArr[x]);
  }
  // console.log("------------");
  //reverse texto a cifrar
  textArr.reverse()


  for(var y=0;y<clave.length;y++){
    //xor
    if(y<textArr.length){
      cifrado.push(textArr[y]^claveArr[y]);
      //console.log("Texto a cifrar: "+textArr[y]);
      //console.log("Clave : "+claveArr[y]);
      //console.log("Resultado xor: "+cifrado[y]);
    }else{
      cifrado.push('1'^claveArr[y]);
    }
    //console.log(cifrado[y]);
    //console.log(claveArr[y]);
    //console.log(cifrado[y]^claveArr[y]);
    //console.log((cifrado[y]%94)+32);
    textArrFinal.push(Math.round((cifrado[y])/2+31))//%94)+32)
    // console.log(String.fromCharCode((cifrado[y]%94)+32));
  }

  for(var a=0; a<textArrFinal.length;a++){
    if(a%2==0){
      textArrEven.push(textArrFinal[a])
    }else{
      textArrOdd.push(textArrFinal[a])
    }
  }
  // console.log("------------")
  textArrFinal = textArrOdd.concat(textArrEven)
  // console.log(textArrEven)
  // console.log(textArrOdd)
   //console.log(textArrFinal)

  for (var i = 0; i < textArrFinal.length; i++) {
    textArrFinal[i]= textArrFinal[i]+i
  }
  // console.log("------------")
  // console.log(textArrFinal)

  for (var i = 0; i < textArrFinal.length; i++) {
    //console.log("----Valorr final-----")
  //  console.log(textArrFinal[i])
    textArrFinal[i]= String.fromCharCode(textArrFinal[i])
    //console.log("----Valorr final-----")
    //console.log(textArrFinal[i])
  }
  // console.log("------------")
  // console.log(textArrFinal)

  textoCifrado= textArrFinal.join('')
  // console.log(textoCifrado)
  return textoCifrado;
}
(function(){

    var ConvertBase = function (num) {
        return {
            from : function (baseFrom) {
                return {
                    to : function (baseTo) {
                        return parseInt(num, baseFrom).toString(baseTo);
                    }
                };
            }
        };
    };

    // binary to decimal
    ConvertBase.bin2dec = function (num) {
        return ConvertBase(num).from(2).to(10);
    };

    // binary to hexadecimal
    ConvertBase.bin2hex = function (num) {
        return ConvertBase(num).from(2).to(16);
    };

    // decimal to binary
    ConvertBase.dec2bin = function (num) {
        return ConvertBase(num).from(10).to(2);
    };

    // decimal to hexadecimal
    ConvertBase.dec2hex = function (num) {
        return ConvertBase(num).from(10).to(16);
    };

    // hexadecimal to binary
    ConvertBase.hex2bin = function (num) {
        return ConvertBase(num).from(16).to(2);
    };

    // hexadecimal to decimal
    ConvertBase.hex2dec = function (num) {
        return ConvertBase(num).from(16).to(10);
    };

    this.ConvertBase = ConvertBase;

})(this);



// console.log("------------");
// for(var x=0;x<clave.length;x++){
//   console.log(String.fromCharCode(ConvertBase.bin2dec(claveArr[x])));
// }

var textoCifrado = '#$_&\'b'
//console.log(textoCifrado)
var clave= "zzzzzz"
clave=clave+clave+clave

//console.log(textoCifrado)
var lengthAux = Math.round(textoCifrado.length/2)
var oddAux=[]
var evenAux=[]
var textArr=[]
var claveArr=[]

var decrypt = (textoCifrado,clave)=>{

  for (var i = 0; i < clave.length; i++) {
    claveArr[i] = clave.charCodeAt(i)
  }
  for (var i = 0; i < textoCifrado.length; i++) {
    //console.log("Texto cifrado: "+textoCifrado.charCodeAt(i))
    if(i<lengthAux){
      oddAux.push((textoCifrado.charCodeAt(i)-i))
    }else{
      evenAux.push((textoCifrado.charCodeAt(i)-i))
    }
    //textArr[i] = ConvertBase.dec2bin(textArr[i].charCodeAt(0)-i)
    //console.log(textArr[i])
  }

  for (var i = 0; i < textoCifrado.length; i++) {
    if(i%2==0){
      textArr.push(evenAux.pop())
    }else{
      textArr.push(oddAux.pop())
    }

  }
  textArr.reverse()
  //console.log(textArr)

  for (var i = 0; i < textArr.length; i++) {
    // console.log("Texxxxxto a cifrar: "+(textArr[i]-31.5)*2)
    // console.log("Clave : "+claveArr[i])
    // console.log((textArr[i]-31.5)*2^claveArr[i])
    textArr[i]= ((textArr[i]-31.5)*2)^claveArr[i]
  }
  //textArr.reverse()
  for (var i = 0; i < textArr.length; i++) {
    textArr[i] = String.fromCharCode(textArr[i])
  }
  //console.log(textArr.join(''))
  return textArr.join('')




}




var clave1;
var clave2;
var textoACifrar;
var textoAdecifrar; 

//const cipher = require('./cipher.js')
//const decipher = require('./decipher.js')

function encriptar(){
//    var earrings = document.getElementById('encriptar');
//    earrings.style.visibility = 'hidden';   
   
    clave1 = document.getElementById("input_clave").value;
    textoACifrar=document.getElementById("input_textoACifrar").value;
    
    var enc = crypt(textoACifrar,clave1);
    var res = document.getElementById("resultado").value;
    
    console.log(enc);
   
    
    
}

function desencriptar(){
    
    clave2 = document.getElementById("input_clave2").value;
    textoAdecifrar = document.getElementById("input_textoADeCifrar").value;
    var dec = decrypt(textoAdecifrar,clave2);
    
    console.log(dec)
}

function selectHandler(select){
if(select.value == "1"){
console.log("enc")
    var earrings = document.getElementById('encriptar');
    earrings.style.visibility = 'visible';
    var earrings2 = document.getElementById('desencriptar');
    earrings2.style.visibility = 'hidden'; 
}else if(select.value == "2"){
    console.log("des")
    var earrings = document.getElementById('encriptar');
    earrings.style.visibility = 'hidden';
    var earrings2 = document.getElementById('desencriptar');
    earrings2.style.visibility = 'visible'; 

}}
//var enc = cipher.crypt("}}}}","zzzzzz")
//var dec = decipher.decrypt("#$_&'b","zzzzzz")
//
//console.log(enc)
//console.log(dec)


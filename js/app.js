$(document).ready(function() {
    $('select').material_select();
         
  });


var crypt = (texto,clave)=>{
  var diff = 20 - clave.length;
  var claveAux = clave;    
  //checar tamaño de bloque
  var i=0;
  if(diff!=0){
      while(clave.length<20){
          clave+=claveAux.charAt(i);
           i++;
          if(i>=claveAux.length){
              i=0;
          }
      }
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
    if(y<=textArr.length){
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
    textArrFinal.push(((cifrado[y])+32))//%94)+32)
    console.log('ESTO ME IMPORTA')
    console.log(cifrado[y])
    console.log(Math.round((cifrado[y])/2+31))
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


var decrypt = (textoCifrado,clave)=>{
  var diff = 20 - clave.length;
  var claveAux = clave;    
  //checar tamaño de bloque
  var i=0;
  if(diff!=0){
      while(clave.length<20){
          clave+=claveAux.charAt(i);
           i++;
          if(i>=claveAux.length){
              i=0;
          }
      }
  }
    console.log(textoCifrado)
    var lengthAux = Math.round(textoCifrado.length/2)
    var oddAux=[]
    var evenAux=[]
    var textArr=[]
    var claveArr=[]

  for (var i = 0; i < clave.length; i++) {
    claveArr[i] = clave.charCodeAt(i)
  }
  for (var i = 0; i < textoCifrado.length; i++) {
    console.log("Texto cifrado: "+textoCifrado.charCodeAt(i))
    if(i<lengthAux){
      oddAux.push((textoCifrado.charCodeAt(i)-i))
    }else{
      evenAux.push((textoCifrado.charCodeAt(i)-i))
    }
    //textArr[i] = ConvertBase.dec2bin(textArr[i].charCodeAt(0)-i)
   
  }
    console.log("impares");
    console.log(oddAux);
    console.log("pares");
    console.log(evenAux);
    
    console.log("Tamanio"+textoCifrado.length)
    console.log("TEXTARR");
    console.log(textArr)

  for (var i = 0; i < textoCifrado.length; i++) {
    if(i%2==0){
      textArr.push(evenAux.shift())
    }else{
      textArr.push(oddAux.shift())
    }

  }
  //textArr.reverse()
    console.log("TEXTARRev");
  console.log(textArr)
  var arrFinal=[];
  for (var i = 0; i < textArr.length; i++) {
     console.log("Texxxxxto a decifrar sin operacion: "+(textArr[i]))
     console.log("Texxxxxto a decifrar con operacion: "+Math.round((textArr[i])))
     console.log("Clave : "+claveArr[i])
     console.log(textArr[i]^claveArr[i]) 
     
    var res = (((textArr[i])-32)^claveArr[i])
    if(res!=1){
        arrFinal.push(res);
    }
    textArr[i]= ((textArr[i]))^claveArr[i]
  }
  //textArr.reverse()
  arrFinal.reverse()
  for (var i = 0; i < arrFinal.length; i++) {
    arrFinal[i] = String.fromCharCode(arrFinal[i])
  }
  console.log(arrFinal.join(''))
  return arrFinal.join('')




}



var clave1;
var clave2;
var textoACifrar;
var textoAdecifrar; 



function encriptar(){
//    var earrings = document.getElementById('encriptar');
//    earrings.style.visibility = 'hidden';   
   
    clave1 = document.getElementById("input_clave").value;
    textoACifrar=document.getElementById("input_textoACifrar").value;
    
    var enc = crypt(textoACifrar,clave1);
    var res = document.getElementById("resultado").value;
    document.getElementById('resultado').innerHTML = enc;
    console.log(enc);
   
    
    
}

function desencriptar(){
    
    clave2 = document.getElementById("input_clave2").value;
    textoAdecifrar = document.getElementById("input_textoADeCifrar").value;
    var dec = decrypt(textoAdecifrar,clave2);
    document.getElementById('resultado').innerHTML = dec;
    console.log(dec)
}

function selectHandler(select){
    if(select.value =="0"){
      var earrings = document.getElementById('encriptar');
    earrings.style.visibility = 'hidden';
    var earrings2 = document.getElementById('desencriptar');
    earrings2.style.visibility = 'hidden';   
    }
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

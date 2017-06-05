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
  var arrFinal=[];
  for (var i = 0; i < textArr.length; i++) {
    // console.log("Texxxxxto a cifrar: "+(textArr[i]-31.5)*2)
    // console.log("Clave : "+claveArr[i])
     //console.log((textArr[i]-31.5)*2^claveArr[i]) 
    var res = ((textArr[i]-31.5)*2)^claveArr[i]
    if(res!=1){
        arrFinal.push(res);
    }
    textArr[i]= ((textArr[i]-31.5)*2)^claveArr[i]
  }
  //textArr.reverse()
    arrFinal.reverse()
  for (var i = 0; i < arrFinal.length; i++) {
    arrFinal[i] = String.fromCharCode(arrFinal[i])
  }
  //console.log(arrFinal.join(''))
  return arrFinal.join('')




}
//module.exports.decrypt=decrypt

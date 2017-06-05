//console.log((127>>>0).toString(2));

// var texto ="}}}}"
//  var clave= "zzzzzz"

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



module.exports={
    crypt
    
}

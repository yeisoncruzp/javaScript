var calculadora={
  uno:document.getElementById("1"),
  dos:document.getElementById("2"),
  tres:document.getElementById("3"),
  cuatro:document.getElementById("4"),
  cinco:document.getElementById("5"),
  seis:document.getElementById("6"),
  siete:document.getElementById("7"),
  ocho:document.getElementById("8"),
  nueve:document.getElementById("9"),
  cero:document.getElementById("0"),
  on:document.getElementById("on"),
  resta:document.getElementById("menos"),
  suma:document.getElementById("mas"),
  multi:document.getElementById("por"),
  divi:document.getElementById("dividido"),
  igual:document.getElementById("igual"),
  punto:document.getElementById("punto"),
  display:document.getElementById("display"),
  signo:document.getElementById("sign"),
  operaciones:"",
  cifra:"",
  acumulado:0

}
//---------------Imprimir numeros en el Display----------------//
// var n= calculadora.display.textContent.indexOf(".");

  function mostrar (num) {
    if (calculadora.display.textContent.length < 8) {
      if (calculadora.display.textContent === "0") {
          calculadora.display.textContent = num;
          calculadora.cifra =calculadora.display.textContent;
      }else {
          calculadora.display.textContent = calculadora.cifra + num
          calculadora.cifra =calculadora.display.textContent;
      }
    }
  }

  function mostrarPunto(signo){
    if (calculadora.display.textContent.length < 8) {
      if (calculadora.display.textContent === "0") {
        calculadora.display.textContent= "0" + signo;
        calculadora.cifra=calculadora.display.textContent;
      }else {
        if (calculadora.display.textContent.indexOf(".") == -1) {
          calculadora.display.textContent= calculadora.cifra += signo;
          calculadora.cifra=calculadora.display.textContent;
        }
      }

    }
  }


  function suma (a , b) {
    return(a + b);
  }
  function resta (a , b) {
    return(a - b);
   }
   function multiplicacion (a , b) {
    return(a * b);
   }
   function division (a , b) {
    return(a / b);
   }
   function resultado(){
      var x = parseFloat(calculadora.acumulado);
      var y = parseFloat(calculadora.cifra);
      var o = calculadora.operaciones;

      switch (o) {
          case "0":
          calculo= suma(x ,y);
          break;
          case "1":
          calculo= resta(x ,y);
          break;
          case "2":
          calculo= division(x ,y);
          break;
          case "3":
          calculo= multiplicacion(x ,y);
          break;

          default:
          calculo="no valido";
      }

          calculadora.display.textContent=calculo.toPrecision(8);    

   }
   function borrar (){
        calculadora.display.textContent= 0;
        calculadora.cifra="";
        calculadora.acumulado=0;
   }
   function signo(){
     if (calculadora.display.textContent == 0) {
        calculadora.display.textContent=0
     }else {
       calculadora.cifra *= -1;
       calculadora.display.textContent = calculadora.cifra;
     }

   }

    calculadora.uno.onclick = function() {mostrar(1)};
    calculadora.dos.onclick = function() {mostrar(2)};
    calculadora.tres.onclick = function() {mostrar(3)};
    calculadora.cuatro.onclick = function() {mostrar(4)};
    calculadora.cinco.onclick = function() {mostrar(5)};
    calculadora.seis.onclick = function() {mostrar(6)};
    calculadora.siete.onclick = function() {mostrar(7)};
    calculadora.ocho.onclick = function() {mostrar(8)};
    calculadora.nueve.onclick = function() {mostrar(9)};
    calculadora.cero.onclick = function() {mostrar(0)};
    calculadora.punto.onclick = function() {mostrarPunto(".")};
    calculadora.suma.addEventListener("click",function(){
      calculadora.operaciones="0";
      calculadora.acumulado = calculadora.display.textContent;
      calculadora.display.textContent="";
      calculadora.cifra= "";
    });
    calculadora.resta.addEventListener("click",function(){
      calculadora.operaciones="1";
      calculadora.acumulado = calculadora.display.textContent;
      calculadora.display.textContent="";
      calculadora.cifra= "";
    });
    calculadora.divi.addEventListener("click",function(){
      calculadora.operaciones="2";
      calculadora.acumulado = calculadora.display.textContent;
      calculadora.display.textContent="";
      calculadora.cifra= "";
    });
    calculadora.multi.addEventListener("click",function(){
      calculadora.operaciones="3";
      calculadora.acumulado = calculadora.display.textContent;
      calculadora.display.textContent="";
      calculadora.cifra= "";
    });
    calculadora.igual.addEventListener("click",resultado);
    calculadora.on.addEventListener("click",borrar);
    calculadora.signo.addEventListener("click",signo);

//----------------efecto de oprimir boton-----------------------//

  function efecto(e) {
    if (e.target == calculadora.uno) {
      calculadora.uno.style.width="26.5%";
      calculadora.uno.style.height="59.10px";
      calculadora.uno.style.marginLeft="1%";
      calculadora.uno.style.marginTop="1%";
    }
    else if(e.target == calculadora.dos){
      calculadora.dos.style.width="26.5%";
      calculadora.dos.style.height="59.10px";
      calculadora.dos.style.marginLeft="1%";
      calculadora.dos.style.marginTop="1%";
    }
    else if(e.target == calculadora.tres){
      calculadora.tres.style.width="26.5%";
      calculadora.tres.style.height="59.10px";
      calculadora.tres.style.marginLeft="1%";
      calculadora.tres.style.marginTop="1%";
    }
    else if(e.target == calculadora.igual){
      calculadora.igual.style.width="26.5%";
      calculadora.igual.style.height="59.10px";
      calculadora.igual.style.marginLeft="1%";
      calculadora.igual.style.marginTop="1%";
    }
    else if(e.target == calculadora.cuatro){
      calculadora.cuatro.style.width="20.2%";
      calculadora.cuatro.style.height="59.10px";
      calculadora.cuatro.style.marginLeft="1%";
      calculadora.cuatro.style.marginTop="1%";
    }
    else if(e.target == calculadora.cinco){
      calculadora.cinco.style.width="20.2%";
      calculadora.cinco.style.height="59.10px";
      calculadora.cinco.style.marginLeft="1%";
      calculadora.cinco.style.marginTop="1%";
    }
    else if(e.target == calculadora.seis){
      calculadora.seis.style.width="20.2%";
      calculadora.seis.style.height="59.10px";
      calculadora.seis.style.marginLeft="1%";
      calculadora.seis.style.marginTop="1%";
    }
    else if(e.target == calculadora.resta){
      calculadora.resta.style.width="20.2%";
      calculadora.resta.style.height="59.10px";
      calculadora.resta.style.marginLeft="1%";
      calculadora.resta.style.marginTop="1%";
    }
    else if(e.target == calculadora.siete){
      calculadora.siete.style.width="20.2%";
      calculadora.siete.style.height="59.10px";
      calculadora.siete.style.marginLeft="1%";
      calculadora.siete.style.marginTop="1%";
    }
    else if(e.target == calculadora.ocho){
      calculadora.ocho.style.width="20.2%";
      calculadora.ocho.style.height="59.10px";
      calculadora.ocho.style.marginLeft="1%";
      calculadora.ocho.style.marginTop="1%";
    }
    else if(e.target == calculadora.nueve){
      calculadora.nueve.style.width="20.2%";
      calculadora.nueve.style.height="59.10px";
      calculadora.nueve.style.marginLeft="1%";
      calculadora.nueve.style.marginTop="1%";
    }
    else if(e.target == calculadora.multi){
      calculadora.multi.style.width="20.2%";
      calculadora.multi.style.height="59.10px";
      calculadora.multi.style.marginLeft="1%";
      calculadora.multi.style.marginTop="1%";
    }
    else if(e.target == calculadora.cero){
      calculadora.cero.style.width="26.5%";
      calculadora.cero.style.height="59.10px";
      calculadora.cero.style.marginLeft="1%";
      calculadora.cero.style.marginTop="1%";
    }
    else if(e.target == calculadora.punto){
      calculadora.punto.style.width="26.5%";
      calculadora.punto.style.height="59.10px";
      calculadora.punto.style.marginLeft="1%";
      calculadora.punto.style.marginTop="1%";
    }
    else if(e.target == calculadora.divi){
      calculadora.divi.style.width="20.2%";
      calculadora.divi.style.height="59.10px";
      calculadora.divi.style.marginLeft="1%";
      calculadora.divi.style.marginTop="1%";
    }
    else if(e.target == calculadora.on){
      calculadora.on.style.width="20.2%";
      calculadora.on.style.height="59.10px";
      calculadora.on.style.marginLeft="1%";
      calculadora.on.style.marginTop="1%";
    }
    else if(e.target == calculadora.suma){
      calculadora.suma.style.width="89.2%";
      calculadora.suma.style.height="98.5%";
      calculadora.suma.style.marginLeft="12px";
      calculadora.suma.style.marginTop="1%";
    }
    else if(e.target == calculadora.signo){
      calculadora.signo.style.width="20.2%";
      calculadora.signo.style.height="59.10px";
      calculadora.signo.style.marginLeft="1%";
      calculadora.signo.style.marginTop="1%";
    }
  }
  //--------------------Funcion Quitar Efecto------------//
  function quitar(e){
    if (e.target == calculadora.uno) {
      calculadora.uno.style.width="29%";
      calculadora.uno.style.height="62.91px";
      calculadora.uno.style.marginLeft="0%";
      calculadora.uno.style.marginTop="0%";
    }
    else if(e.target == calculadora.dos){
      calculadora.dos.style.width="29%";
      calculadora.dos.style.height="62.91px";
      calculadora.dos.style.marginLeft="0%";
      calculadora.dos.style.marginTop="0%";
    }
    else if(e.target == calculadora.tres){
      calculadora.tres.style.width="29%";
      calculadora.tres.style.height="62.91px";
      calculadora.tres.style.marginLeft="0%";
      calculadora.tres.style.marginTop="0%";
    }
    else if(e.target == calculadora.igual){
      calculadora.igual.style.width="29%";
      calculadora.igual.style.height="62.91px";
      calculadora.igual.style.marginLeft="0%";
      calculadora.igual.style.marginTop="0%";
    }
    else if(e.target == calculadora.cuatro){
      calculadora.cuatro.style.width="22%";
      calculadora.cuatro.style.height="62.91px";
      calculadora.cuatro.style.marginLeft="0%";
      calculadora.cuatro.style.marginTop="0%";
    }
    else if(e.target == calculadora.cinco){
      calculadora.cinco.style.width="22%";
      calculadora.cinco.style.height="62.91px";
      calculadora.cinco.style.marginLeft="0%";
      calculadora.cinco.style.marginTop="0%";
    }
    else if(e.target == calculadora.seis){
      calculadora.seis.style.width="22%";
      calculadora.seis.style.height="62.91px";
      calculadora.seis.style.marginLeft="0%";
      calculadora.seis.style.marginTop="0%";
    }
    else if(e.target == calculadora.resta){
      calculadora.resta.style.width="22%";
      calculadora.resta.style.height="62.91px";
      calculadora.resta.style.marginLeft="0%";
      calculadora.resta.style.marginTop="0%";
    }
    else if(e.target == calculadora.siete){
      calculadora.siete.style.width="22%";
      calculadora.siete.style.height="62.91px";
      calculadora.siete.style.marginLeft="0%";
      calculadora.siete.style.marginTop="0%";
    }
    else if(e.target == calculadora.ocho){
      calculadora.ocho.style.width="22%";
      calculadora.ocho.style.height="62.91px";
      calculadora.ocho.style.marginLeft="0%";
      calculadora.ocho.style.marginTop="0%";
    }
    else if(e.target == calculadora.nueve){
      calculadora.nueve.style.width="22%";
      calculadora.nueve.style.height="62.91px";
      calculadora.nueve.style.marginLeft="0%";
      calculadora.nueve.style.marginTop="0%";
    }
    else if(e.target == calculadora.multi){
      calculadora.multi.style.width="22%";
      calculadora.multi.style.height="62.91px";
      calculadora.multi.style.marginLeft="0%";
      calculadora.multi.style.marginTop="0%";
    }
    else if(e.target == calculadora.cero){
      calculadora.cero.style.width="29%";
      calculadora.cero.style.height="62.91px";
      calculadora.cero.style.marginLeft="0%";
      calculadora.cero.style.marginTop="0%";
    }
    else if(e.target == calculadora.punto){
      calculadora.punto.style.width="29%";
      calculadora.punto.style.height="62.91px";
      calculadora.punto.style.marginLeft="0%";
      calculadora.punto.style.marginTop="0%";
    }
    else if(e.target == calculadora.divi){
      calculadora.divi.style.width="22%";
      calculadora.divi.style.height="62.91px";
      calculadora.divi.style.marginLeft="0%";
      calculadora.divi.style.marginTop="0%";
    }
    else if(e.target == calculadora.on){
      calculadora.on.style.width="22%";
      calculadora.on.style.height="62.91px";
      calculadora.on.style.marginLeft="0%";
      calculadora.on.style.marginTop="0%";
    }
    else if(e.target == calculadora.suma){
      calculadora.suma.style.width="90%";
      calculadora.suma.style.height="100%";
      calculadora.suma.style.marginLeft="10px";
      calculadora.suma.style.marginTop="0%";
    }
    else if(e.target == calculadora.signo){
      calculadora.signo.style.width="22%";
      calculadora.signo.style.height="62.91px";
      calculadora.signo.style.marginLeft="0%";
      calculadora.signo.style.marginTop="0%";
    }
  }
  calculadora.uno.onmousedown=efecto;
  calculadora.uno.onmouseup=quitar;
  //-------------dos---------------//
  calculadora.dos.onmousedown=efecto;
  calculadora.dos.onmouseup=quitar;
  //-------------tres---------------//
  calculadora.tres.onmousedown=efecto;
  calculadora.tres.onmouseup=quitar;
  //-------------cuatro---------------//
  calculadora.cuatro.onmousedown=efecto;
  calculadora.cuatro.onmouseup=quitar;
  //-------------cinco---------------//
  calculadora.cinco.onmousedown=efecto;
  calculadora.cinco.onmouseup=quitar;
  //-------------seis---------------//
  calculadora.seis.onmousedown=efecto;
  calculadora.seis.onmouseup=quitar;
  //-------------siete---------------//
  calculadora.siete.onmousedown=efecto;
  calculadora.siete.onmouseup=quitar;
  //-------------ocho---------------//
  calculadora.ocho.onmousedown=efecto;
  calculadora.ocho.onmouseup=quitar;
  //-------------nueve---------------//
  calculadora.nueve.onmousedown=efecto;
  calculadora.nueve.onmouseup=quitar;
  //-------------cero---------------//
  calculadora.cero.onmousedown=efecto;
  calculadora.cero.onmouseup=quitar;
  //-------------punto---------------//
  calculadora.punto.onmousedown=efecto;
  calculadora.punto.onmouseup=quitar;
  //-------------Resta---------------//
  calculadora.resta.onmousedown=efecto;
  calculadora.resta.onmouseup=quitar;
  //-------------Multi---------------//
  calculadora.multi.onmousedown=efecto;
  calculadora.multi.onmouseup=quitar;
  //-------------divide---------------//
  calculadora.divi.onmousedown=efecto;
  calculadora.divi.onmouseup=quitar;
  //-------------igual---------------//
  calculadora.igual.onmousedown=efecto;
  calculadora.igual.onmouseup=quitar;
  //-------------igual---------------//
  calculadora.on.onmousedown=efecto;
  calculadora.on.onmouseup=quitar;
  //-------------suma---------------//
  calculadora.suma.onmousedown=efecto;
  calculadora.suma.onmouseup=quitar;
  //-------------signo---------------//
  calculadora.signo.onmousedown=efecto;
  calculadora.signo.onmouseup=quitar;

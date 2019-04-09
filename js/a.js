//   function display_numeros(e) {
//   if (e.target == calculadora.uno) {
//     calculadora.display.textContent= calculadora.cifra + 1
//     calculadora.cifra=calculadora.display.textContent;
//   }
//   else if(e.target == calculadora.dos){
//     calculadora.display.textContent= calculadora.cifra + 2
//     calculadora.cifra=calculadora.display.textContent;
//   }
//   else if(e.target == calculadora.tres){
//     calculadora.display.textContent= calculadora.cifra + 3
//     calculadora.cifra=calculadora.display.textContent;
//   }
//   else if(e.target == calculadora.cuatro){
//     calculadora.display.textContent= calculadora.cifra + 4
//     calculadora.cifra=calculadora.display.textContent;
//   }
//   else if(e.target == calculadora.cinco){
//     calculadora.display.textContent= calculadora.cifra + 5
//     calculadora.cifra=calculadora.display.textContent;
//   }
//   else if(e.target == calculadora.seis){
//     calculadora.display.textContent= calculadora.cifra + 6
//     calculadora.cifra=calculadora.display.textContent;
//   }
//   else if(e.target == calculadora.siete){
//     calculadora.display.textContent= calculadora.cifra + 7
//     calculadora.cifra=calculadora.display.textContent;
//   }
//   else if(e.target == calculadora.ocho){
//     calculadora.display.textContent= calculadora.cifra + 8
//     calculadora.cifra=calculadora.display.textContent;
//   }
//   else if(e.target == calculadora.nueve){
//     calculadora.display.textContent= calculadora.cifra + 9
//     calculadora.cifra=calculadora.display.textContent;
//   }
//   else if(e.target == calculadora.cero){
//     calculadora.display.textContent= calculadora.cifra + 0
//     calculadora.cifra=calculadora.display.textContent;
//   }
//   else if(e.target == calculadora.punto){
//     calculadora.display.textContent=calculadora.cifra + "."
//     calculadora.cifra=calculadora.display.textContent;
//   }
// }

//---------------------------display--------------------------//
// calculadora.uno.addEventListener("click",display_numeros);
// calculadora.dos.addEventListener("click",display_numeros);
// calculadora.tres.addEventListener("click",display_numeros);
// calculadora.cuatro.addEventListener("click",display_numeros);
// calculadora.cinco.addEventListener("click",display_numeros);
// calculadora.seis.addEventListener("click",display_numeros);
// calculadora.siete.addEventListener("click",display_numeros);
// calculadora.ocho.addEventListener("click",display_numeros);
// calculadora.nueve.addEventListener("click",display_numeros);
// calculadora.cero.addEventListener("click",validacion);
// calculadora.punto.addEventListener("click",display_numeros);
// calculadora.suma.addEventListener("click",suma);
// calculadora.resta.addEventListener("click",resta);
// calculadora.multi.addEventListener("click",multiplicacion);
// calculadora.divi.addEventListener("click",division);
// calculadora.igual.addEventListener("click",resultado);

//------------------------validacion--------------------//
// function validacion(){
//   if (calculadora.display.textContent == "0") {
//       calculadora.display.textContent = 0;
//   }else {
//     calculadora.cero.addEventListener("click",display_numeros);
//   }
// }

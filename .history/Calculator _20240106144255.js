
var number1 //عدد اول یه جا نگه داریم
var sign   //علامت ها نگه داریم
function store(x){
 sign=x
 number1=parseInt(document.getElementById('dis').value)
 document.getElementById('dis').value=0
}
function sum(x,y){
var z=x+y
return z
}
function subtract(x,y){
var z=x-y
return z
}
function divide(x,y){
var z=x/y
return z
}
function multiplication(x,y){
var z=x*y
return z
}
function equal(){
  var equal
  
  var number2=parseInt(document.getElementById('dis').value)
  switch(sign) {
    case '+':
      equal=sum(number1,number2)
      break;
    case '-':
      equal=subtract(number1,number2)
      break;
     case '*':
      equal=multiplication(number1,number2)
       break;
        case '/':
          equal=divide(number1,number2)
         break;
  }
  document.getElementById('dis').value=equal
// document.getElementById('dis').value=equal
// if(sign=='-'){
//   equal=subtract(number1,number2)
// }
// document.getElementById('dis').value=equal
// if(sign=='/'){
//   equal=divide(number1,number2)
// }
// document.getElementById('dis').value=equal
// if(sign=='*'){
//   equal=multiplication(number1,number2)
// }
// document.getElementById('dis').value=equal
}

function  num(x){
  var y=document.getElementById('dis').value
  var r=y*10
  r=r+x
  document.getElementById('dis').value=r
}

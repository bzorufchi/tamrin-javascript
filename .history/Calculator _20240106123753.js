
var number1
var sign
function store(x){
 sign=x
 number1=document.getElementById('dis').value
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
  var number2=document.getElementById('dis').value
  if (sign=='+') {
    equal= sum(number1,number2)
  }
  switch() {
    case :
    
      break;
    case :
      
      break;
    default:
  
  }

document.getElementById('dis').value=equal
}

function  num(x){
  var r=x*10
  r=r+x
}

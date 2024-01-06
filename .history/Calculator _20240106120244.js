
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
  var number2=document.getElementById('dis').value
  if (sign=='+') {
    sum()
  }

}

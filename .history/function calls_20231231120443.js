var x=2
var y=5 
var z=10
function one(x,y,z){
var s=x*y*z
return s
}
function tow(s){
return one();
}
tow(s)
console.log(s)
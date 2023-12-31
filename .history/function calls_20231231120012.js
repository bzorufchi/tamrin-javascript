x=2
function one(x,y,z){
var s=x*y*z
console.log(s)
}
function tow(){
return one();
}
const f=tow()
console.log(f)
var x=5
var y=2
var z=10
function one(x,y,z){
var s=x*y*z
console.log(s)
}
one(x,y,z)

function tow(){
return one()
}
const f=tow()
console.log
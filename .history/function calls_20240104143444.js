var x=5
var y=2
var z=10
var flag=true
var i =0
while (flag) {
    i=i+1
}
function one(x,y,z){
var s=x*y*z
if(flag==true){
 console.log(s)
 flag=false;
}
else{
    console.log("فراخانی شده")
}
}

one(x,y,z)
one(x,y,z)

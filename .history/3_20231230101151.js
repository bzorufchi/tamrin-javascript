
var value=20;
function x(value){
return {
    y:y,
    z:z
}
}
function y(input){
if(input===value){
    console.log("true")
}
else{
    console.log("Not Equal")
}
}

function z(input2){
if(input2!==value){
    console.log("true");
}
else{
    console.log("barabar");
}
}
var one =x(value)
//wrong  console.log(one.y(10))
one.y(55)
z(30);
one.z(30);

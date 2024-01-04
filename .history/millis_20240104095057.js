var millis=100
var x=1000000000
function sleep(millis,x){
let t=Date.now();
sleep(100).then(()=>{
console.log(Date.now()-t)
return x
});
}
sleep(millis,x)
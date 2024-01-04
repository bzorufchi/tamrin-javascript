var millis=100
function sleep(millis,2){
let t=Date.now();
sleep(100).then(()=>{
console.log(Date.now()-t)
});
}
sleep(millis)
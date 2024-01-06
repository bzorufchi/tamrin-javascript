var arr=[]
console.log(random())
for (let i = 0; i < 4; i++) {
arr[i]=random()
    
}
console.log(arr)
function random(){
    var x=Math.floor(Math.random() * 10);
    return x
}
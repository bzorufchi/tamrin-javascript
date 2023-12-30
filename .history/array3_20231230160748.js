var arr=[1,2,3,4,5]
var n=[]
var i=5;
function number(i){
i=i+1
return i
}
number(arr)
for(var i=0;i<5;i++){
number(arr[i])
n[i]=number(arr[i])
}
console.log(n)

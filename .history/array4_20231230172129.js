var arr=[1,2,3,4,5]
var n=[]
var x=0
for(var i=0;i<arr.length;i++){
sum(arr[i])
x=sum(x,arr[i])
}
console.log(n)
function sum(x,arr){
return x+arr
}

var arr=[1,2,3,4,5,6]

var x=0
for(var i=0;i<arr.length;i++){
i=i
x=sum(x,arr[i])
}
console.log(x)
function sum(x,arr){
return x+arr
}

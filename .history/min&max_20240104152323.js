var arr=[25,6,5,8,4,3,22,7,87]
// var min=Math.min.apply(Math,arr)
// var max=Math.max.apply(Math,arr)
// console.log(x)
// console.log(min)
// console.log(max)
var a=min(arr)
console.log(a)

var b=max(arr)
console.log(b)
function min(str){
    var min=str[0]
    for (let i = 0; i < str.length; i++) {
       if(str[i]<min){
        min=str[i]
       }
        
    }
    return min
}

function max(str){
    var max=str[0]
    for (let i = 0; i < str.length; i++) {
       if(str[i]>max){
        max=str[i]
       }
        
    }
    return max
}


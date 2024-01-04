var arr=[25,6,5,8,4,3,22,7,87]
var a=min1(arr)
console.log(a)

var b=max1(arr)
console.log(b)
function min1(str){
    var min=str[0]
    for (let i = 0; i < str.length; i++) {
       if(str[i]<min){
        min=str[i]
       }
        
    }
    return min
}
function sort(){

}
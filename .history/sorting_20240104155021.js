var arr=[25,6,5,8,4,3,22,7,87]
var sort=[]
var a=min1(arr)
sort(arr,a)
console.log(sort)
function min1(str){
    var min=str[0]
    for (let i = 0; i < str.length; i++) {
       if(str[i]<min){
        min=str[i]
       }
        
    }
    return min
}
function sort(input,min){
    var min=input[0]
    for (let i = 0; i < input.length; i++) {
       if(str[i]<min){
        min=str[i]
       }
        
    }
    return min    

}
var arr=[1,6,5,8,4,3,22,7,87]
var s=[]
var len = arr.length

for (let i = 0; i < len; i++) {
    s[i]=min1(arr)
    
}

console.log(s)



function min1(str){
    var indexmin=0
    var min=str[0]
    for (let i = 0; i < str.length; i++) {
       if(str[i]<min){
        min=str[i]
        indexmin=i

       }
        
    }
    arr.splice(indexmin, 1)
    return min
}


function sort1(input,min){
    var z=input[0]
    for (let i = 0; i < input.length; i++) {
       if(input[i]<z && input[i]>min)
       {
        z=input[i]
       }
        
    }
    return z    

}
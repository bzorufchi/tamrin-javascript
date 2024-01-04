var arr=[25,6,5,8,4,3,22,7,87]
var s=[]
s[0]=min1(arr)

for (let i = 0; i < arr.length; i++) {
    s[i+1]=sort1(arr,s[i])
    
}

console.log(s)



function min1(str){
    var min=str[0]
    for (let i = 0; i < str.length-1; i++) {
       if(str[i]<min){
        min=str[i]
       }
        
    }
    return min
}


function sort1(input,min){
    var z=S[0]
    for (let i = 0; i < input.length; i++) {
       if(input[i]<z && input[i]>min)
       {
        z=input[i]
       }
        
    }
    return z    

}
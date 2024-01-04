var arr1=[1,2]
var arr2=[3,4]
var result=[]
 var sum1=0
 console.log(arr1,arr2)
arraye2(arr2,arr1)
sum(result)
function arraye1(arr1) {
for (let i = 0; i < arr1.length; i++) {
    result[i]=(arr1[i])
} 
}
function arraye2(input,arr1) {
    for (let i = 0; i < arr2.length; i++) {
      result[i]=(arr2[i]+arr1[i])
      console.log(result[i])
     } 
     
}
function sum(input){
    for (let i = 0; i <input.length; i++) {
        sum1=sum1+input[i]
      }
}
console.log(sum1)
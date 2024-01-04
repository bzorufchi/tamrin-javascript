var arr1=[1,2]
var arr2=[3,4]
var result=[]
arraye1(arr1)
arraye2(arr2)
console.log(arr1,arr2)
function arraye1(arr1) {
for (let i = 0; i < arr1.length; i++) {
    result[i]=(arr1[i])
} 
}
function arraye2(arr2,arr1) {
    for (let i = 0; i < arr2.length; i++) {
      result[i]=(arr2[i])
     } 
}

function sum(){
    for (let i = 0; i < result.length; i++) {
        result[i]=arr1[i]+arr2[i]
        console.log(result[i])
    }
}

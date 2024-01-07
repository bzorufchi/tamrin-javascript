var arr=[]
var test =[2,4,5,9]
console.log(random())
for (let i = 0; i < 4; i++) {
arr[i]=random()

    
}
console.log(arr)
console.log(test) 
r(arr,test)
console.log(r)
function random(){
    var x=Math.floor(Math.random() * 10);
    return x
}
function r(arr,test){
for (let i = 0; i < arr.length; i++) {
   for (let j = 0; j < test.length; j++) {
    if(arr[i]===test[i]){
       console.log
       console.log('یک عدد برابر پیدا شد')
    }
    else{
      console.log('عدد برابر پیدا نشد')
    }
    
   }
    
}
}

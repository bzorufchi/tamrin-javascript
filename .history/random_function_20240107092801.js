var arr=[]
var pr=[]
var test =[2,4,5,9]
console.log(random())
for (let i = 0; i < 4; i++) {
arr[i]=random()

    
}
console.log(arr)
console.log(test) 
r(arr,test)

function random(){
    var x=Math.floor(Math.random() * 10);
    return x
}
function r(arr,test){
for (let i = 0; i < arr.length; i++) {
   for (let j = 0; j < test.length; j++) {
    if(pr[i]=arr[i]==test[i]){
       console.log(pr,'یک عدد برابر پیدا شد')
    }
    else{
      console.log('عدد برابر پیدا نشد')
    }
    
   }
    
}

}

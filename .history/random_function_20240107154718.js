var arr=[]
var test =[2,4,5,9]
var cuntert=0
var cunterw=0
var cunterp=0
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
    if(arr[i]==test[i]){
       console.log(arr[i],test[i],'یک عدد برابر پیدا شد')
    }
    else{
      console.log('عدد برابر پیدا نشد')
    }
    
   }
    
}

}
function b(x,z){
    for (let i = 0; i < x.length; i++) 
    {
   for (let j = 0; j < z.length; j++) {
    if(x[i]==z[j]){
        if(i==j){
            cuntert++

        }
        else{
            cunterp++

        }
       
    }
    }
    
   }
    
}

b(arr,test)
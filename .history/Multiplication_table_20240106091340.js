
function table(){
    var result='\n'
    for (let i = 1; i < 11; i++) {
       for (let j = 1; j < 11; j++) {
       result +=(i*j)+'';
        
       }
       result +='\n'
       return result
    }
}

console.log(result)
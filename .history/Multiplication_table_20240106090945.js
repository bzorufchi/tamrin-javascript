var result='\n'
function table(){
    for (let i = 1; i < 11; i++) {
       for (let j = 1; j < 11; j++) {
       result +=(i*j)+'';
        
       }
       result +='\n'
    }
}
table
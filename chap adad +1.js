//یک عدد چاپ کند و یکی به آن اضافه کند.
var i=5;
counter(i)
function counter(i){
console.log(i);
i=i+1;
return counter(i);
}
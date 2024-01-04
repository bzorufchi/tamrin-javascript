var x =0
var y=1
var z
var r=[]
r[0]=x
console.log(y)

for (let index = 0; index < 10; index++) {
    z=x+y
    console.log(z)
    x=y
    y=z
}

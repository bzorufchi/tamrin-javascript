var x =0
var y=1
var z
var r=[]
r[0]=x
r[1]=y

for (let index = 2; index < 50; index++) {
    z=x+y
    r[index]=z
    x=y
    y=z
}

console.log(r)

function sum (x)
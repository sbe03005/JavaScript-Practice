let a = [1,2,3,4];

while(a.length>0){
    let value = a.shift();
    console.log("left pop : %d, [%s]", value, a.toString())
}

console.log(a.toString());
let a = [1,3,5,7];

while(a.length>0){
    let value = a.pop();
    console.log("pop : %d, [%s]",value, a.toString());
}

console.log(a.toString());
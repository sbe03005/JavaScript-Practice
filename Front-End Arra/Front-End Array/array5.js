let a = [3]
console.log(a.length)

a[5] = 456
console.log(a.length)

for (let i = 0; i < a.length; ++i) {
    console.log("a[%d] : %s", i, a[i])
}
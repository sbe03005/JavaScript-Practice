function callback(a, b) {
    console.log(a + ", " + b);
    return a + b;
}

let a1 = [10, 20, 30, 40, 50];
let sum = a1.reduce(callback);
console.log(sum);

let sum2 = a1.reduce((a, b) => a + b);
console.log(sum);

console.log();

let a2 = [7, 3, 8, 6, 9, 5, 1, 4];
let max = a1.reduce((a, b) => a > b ? a : b);
console.log(max);
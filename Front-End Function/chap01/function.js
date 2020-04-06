function add1(a, b) {
    return a + b;
}

let a = add1(3, 4);
console.log(a);

let f = add1;
console.log(typeof f);

let b = f(3, 4);
console.log(b);

let c = function add2(a, b) {
    return a + b;
}

let e = function (a, b) {
    return a + b;
}

let add3 = function (a, b) {
    return a + b;
}

console.log(add3);
add3 = 3;
console.log(add3);

console.log();
/* 콜백 */

function test1(func) {
    let result = func(3, 4);
    console.log(result);
}

function add(a, b) {
    return a + b;
}

let mul = function (a, b) {
    return a * b;
}

test1(add);
test1(mul);

test1(function (a, b) {
    return a + b;
})

test1((a, b) => {
    return a + b;
})

let g = (a, b) => {
    return a + b;
}

let h = (a, b) => a + b;
test1((a, b) => a + b); // 간결하다 뿐이지 똑같이 함수이다.


function add(a, b) {
    return a + b;
}

function hello(name) {
    console.log(name);
}

console.log("3" == 3);

console.log(add(3, "4"));

console.log(add(3)); // 숫자 +undefined는 NaN

console.log(add()); // 인자 안줘도 에러는 안남 근데 애매해진다.

hello()

console.log(3 / 'a')
console.log(3 / null)
console.log(3 / 0)


// 애매함은 이렇게 처리한다. 1
function add2(a, b) {
    if (b == undefined) b = 0;
    return a + b;
}

console.log(add2(3));

// 애매함은 이렇게 처리한다. 2 간단하게
function add3(a, b) {
    if (!b) b = 0;
    return a + b;
}

console.log(add3(3));

// 애매함은 이렇게 처리한다. 3 간단하게
function add4(a, b) {
    return a + (b || 0);
}

console.log(add4(3));
console.log(add4(3, 4));
console.log();



/* 가변 파라미터 */

function sum1(...a) { // spread syntax
    let result = 0;
    for (let i = 0; i < a.length; ++i)
        result += a[i];
    return result;
}

console.log(sum1(1, 2, 3, 4));
console.log(sum1(1, 2));
console.log(sum1(4));

function sum2(msg, ...a) { // spread syntax
    let result = 0;
    for (let i = 0; i < a.length; ++i)
        result += a[i];
    console.log(msg);
    return result;
}

console.log(sum2("Hello", 1, 2, 3, 4));
console.log(sum2("Hello", 1, 2));
console.log(sum2("Hello", 4));
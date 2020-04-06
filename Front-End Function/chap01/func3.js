function outterFunc() {
    print("hello");

    function print(msg) {
        console.log(msg);
    }
} // print는 호출 불가

let f = function (msg) {
    console.log(msg);
}

// 만약 f가 사라지면?
let h = (function (msg) {
    console.log(msg)
})("hello") // 익명함수 : 딱 한번 쓸거면 이렇게 할 수 있다.

function factory() {
    return function (msg) {
        console.log(msg);
    }
}

let g = factory();
f("hello")
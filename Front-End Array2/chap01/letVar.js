var a = 3;
var a = 4;
// 에러가 아니다...

let b = 3;
let b = 4; // 에러가 나니까 var 쓰지말자 let을 쓰는 것이 바람직하다.

function test() {
    for (var i = 1; i < 10; ++i) {
        var s = "hello";
    }
    console.log(s); // var는 가장 가까운 함수소속이다.
}
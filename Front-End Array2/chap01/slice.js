let a1 = [1,2,3,4,5];
let a2= a1.slice(0); // 이건 전체 복제

console.log(a2);
console.log(a1 == a2); // 하지만 당연히 다르다. 참조를 비교하는게 아님

console.log(a1.join() == a2.join()); // 자바스크립트는 밸류 타입이다. 자바에서는 레퍼런스 타입
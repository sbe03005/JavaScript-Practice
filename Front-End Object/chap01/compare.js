let person1 = {
    name: "hong",
    age: 16
};
let person2 = {
    name: "hong",
    age: 16
};

let p = person1;

console.log(person1 == person2);
console.log(person1 == p); // 너무 당연하다.

// 자바에서의 문자열은 참조형
// 자바스크립트에서 문자열은 기본자료형

let s1 = "hello world";
let s2 = "hello " + "world";

console.log(s1 == s2);

function equals(p1, p2) {
    return p1.name == p2.name &&
        p1.age == p2.age;
} // 근데 좋은 방법은 아님 equals라는 함수가 딱하나만 가능하니까..

person1 = {
    name: "hong",
    age: 16
};
person2 = {
    name: "jang",
    age: 16
};
let person3 = {
    name: "kang",
    age: 16
};
person4 = {
    person1,
    person2,
    person3
};

console.log(person4);

person4 = [{
        name: "hong",
        age: 16
    },
    {
        name: "hong",
        age: 16
    },
    {
        name: "hong",
        age: 16
    }
];

console.log(person4);

person4[2] = person4[1];
person4[1].age = 20;

console.log(person4);


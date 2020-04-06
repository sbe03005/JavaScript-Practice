let person = {
    name: "hong",
    age: 16
};

console.log(person);
console.log(person.name);
console.log(person.age);

let person2 = {}; // 비어있는 객체 만들어짐

// 없으면 알아서 추가해줌
person2.name = "hong";
person2.age = 16;
console.log(person2);

let person3 = {};

person3["name"] = "hong"; // 자바의 맵 같은 느낌 있으면 꺼내고 없으면 -> 키랑 밸류 -> 맵!
person3["age"] = 16;
console.log(person3);
console.log(person3["name"]);

function createPerson(name, age) {
    return {
        name: name, // 속성명: 값
        age: age
    };
}

let person4 = createPerson("hong", 16);
let person5 = createPerson("kang", 18);

console.log(person4);
console.log(person5);

// 더 간단하게!
function createPerson(name, age) {
    return {
        name,
        age
    };
}

let person6 = createPerson("hong", 16);

console.log(person6);



// 더 간단하게!
function createPerson(name, age) {
    return {
        name : "hong",
        age : 16
    };
}

let person7 = createPerson();
let person8 = createPerson();

person.name = "kang";
person.age = 20;

console.log(person7);
console.log(person8);

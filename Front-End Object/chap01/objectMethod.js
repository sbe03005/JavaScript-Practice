let person = {
    name: "hong",
    age: 16
};
let info = {
    age: 20,
    department: "soft",
    year: 2
};

Object.assign(person, info);
console.log(person);

let person2 = Object.assign({}, person); // 객체 복제
console.log(person2);

// entries : 이차원 배열 리턴
console.log(Object.entries(person))

for (let [key, value] of Object.entries(person)) 
    console.log("%s:%s", key, value);

console.log(Object.keys(person)); // 대놓고 keys
console.log(Object.values(person));



let person3 = {
    name: "hong",
    age: 16
};

Object.freeze(person3); // 이제 고쳐도 안바뀜
console.log(Object.isFrozen(person3)); // 네 얼려있습니다.

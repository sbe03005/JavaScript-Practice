let person = {
    name: "hong",
    age: 16
};

person[0] = "hohojae" // key가 0이고 hohojae 가 values
person[1] = "Aja"

console.log(person);

person = {
    name: "hong",
    age: 16,
    1: "hoho",
    2: "jaja"
}; // 순서는 이렇게 들어갔지만,

console.log(person);
let person1 = {};
let person2 = {};

for (let i = 0; i < 10; ++i) {
    person1["person" + (i + 1)] = {
        name: "hong",
        age: 16 + i
    };
}

for (let i = 0; i < 10; ++i) {
    person2["person" + (i + 1)] = Object.assign({}, person1["person" + (i + 1)]);
}

console.log(person2);
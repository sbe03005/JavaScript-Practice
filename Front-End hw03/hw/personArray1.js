let person = {};

for (let i = 0; i < 10; ++i) {
    person["person"+(i+1)] = {
        name: "hong",
        age: 16 + i
    };
}

console.log(person);
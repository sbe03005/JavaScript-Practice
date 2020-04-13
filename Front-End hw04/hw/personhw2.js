let persons = [{
        name: "hong",
        age: 16
    },
    {
        name: "lim",
        age: 18
    },
    {
        name: "jeon",
        age: 19
    }
];

let person = persons.reduce((p1, p2) => p1.age > p2.age ? p1 : p2);
console.log(person);
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

persons.sort((p1, p2) => p2.age - p1.age);
console.log(persons);
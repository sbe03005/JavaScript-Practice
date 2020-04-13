let persons = [{
        name: "홍길동",
        age: 16
    },
    {
        name: "임꺽정",
        age: 18
    },
    {
        name: "전우치",
        age: 19
    }
];

let person = persons.find(p => p.age == 18);
console.log(person); // 처음 찾은 하나만 리턴 한다.

person = persons.findIndex(p => p.age == 18);
console.log(person);
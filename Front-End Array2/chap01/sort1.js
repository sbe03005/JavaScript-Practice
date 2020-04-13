let persons = [{
        name: "hong",
        age: 20
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

persons.sort((p1, p2) => p1.age - p2.age);
console.log(persons);

persons.sort((p1, p2) => p1.name.localeCompare(p2.name)); // 배열자체를 정렬해버림 이름으로 구분해버리는거
console.log(persons);
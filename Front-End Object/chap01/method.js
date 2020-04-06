let rectangle = {
    width: 5,
    height: 7,
    area: function () {
        return this.width * this.height; // this. 를 생략 불가능.
    } // 옛날 문법
}

console.log(rectangle.area());

rectangle.area = function () {
    return this.width * this.height;
} // 없으면 넣을 수 있다. 있긴 있지만..


// 탐색

let person = {
    name: "hong",
    age: 16,
    area: function () {
        console.log("")
    },
    department: "soft"
};

for (let key in person) {
    let value = person[key];
    console.log("%s:%s", key, value);
} // 맵처럼.. 

delete person.department; // 삭제 가능

console.log(person)


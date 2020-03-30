let s = "one, two, one, two";

console.log(s.lastIndexOf("two"));
console.log(s.lastIndexOf("two", 11)); // 11 안쪽부터 찾겠다.
console.log(s.lastIndexOf("TWO")); // 못찾으면 -1
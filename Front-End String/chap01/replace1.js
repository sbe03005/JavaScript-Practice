let s = "hello world";

console.log(s.replace("o","O")); // 새 문자열을 다시 만들어서 넣는다.
console.log(s); // 원본은 그대로임

console.log(s.replace(/o/g,"O")); // g는 글로벌, i는 ignore case 대소문자를 무시해라.
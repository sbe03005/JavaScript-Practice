let s = "hello world!"

for(let i=0; i<s.length;++i ){
    console.log(s[i]); // immutable : 읽기만 가능 못바꿈
}

s[0] = 'h';

console.log(s); // 못바꿈! 무시해버림
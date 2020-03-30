let s = "When I find myself in times of trouble Mother Mary comes to me Speaking words of wisdom, let it be.";

for (let i = 0; i < s.length; ++i) {
    if (s[i].search(/[aeiou]/i) == 0) // 해당 문자가 aeiou, AEIOU 가 맞으면 출력
        console.log(i);
}
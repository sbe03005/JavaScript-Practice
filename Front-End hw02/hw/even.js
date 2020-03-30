let a = []

for (let i = 0; i < 100; ++i) {
    a[i] = Math.floor(Math.random() * 100 + 1);
}

console.log(a);

for (let i = 0; i < a.length; ++i) {
    if (a[i] % 2 == 0) {
        a.splice(i--, 1); // 자르고 나서 다음걸 체크해버리면 한칸 건너 뛰게되므로 i--하여 다시 판별
    }
}

console.log(a);
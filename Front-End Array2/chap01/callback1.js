let obj = {
    count: 0,
    startTimter: function () {
        console.log(this.count);
        let callback = function () {
            console.log(this.count++);
        };
        setInterval(callback, 1000);
    }
}

obj.startTimter(); // setInterval 내부에는 count가 없다.



let obj2 = {
    count: 0,
    startTimter: function () {
        console.log(this.count);
        let callback = () => console.log(this.count++); // 자바로 치면 inner class같은 느낌. obj2의 this다.
        setInterval(callback, 1000);
    }
}

obj2.startTimter(); // setInterval 내부에는 count가 없다.
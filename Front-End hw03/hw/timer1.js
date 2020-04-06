let count = 1;

let id = setInterval((msg) => {
    if (count > 10) clearTimeout(id);
    else console.log(count++ + msg, new Date());
}, 1000, " Seconds Interval");
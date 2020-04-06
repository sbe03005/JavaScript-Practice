function printTime(msg) {
    console.log(msg, new Date());
}

setTimeout(printTime, 1000, "1 seconds later");
setTimeout(printTime, 2000, "2 seconds later");
setTimeout(printTime, 3000, "3 seconds later");

setInterval(printTime, 1000, "4 seconds later");

setInterval(function (msg) {
    console.log(msg, new Date());
}, 1000, "1 second simple1")

setInterval((msg)=>console.log(msg, new Date()), 1000, "1 second simple2");
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Your one minute timer is starting");
var counter = 60;
var settedInt = setInterval(function () {
    if (counter > 0) {
        console.clear();
        console.log("".concat(counter, " seconds left"));
        counter--;
    }
    else {
        clearInterval(settedInt);
        console.log("Time's up!");
    }
}, 1000);

import { clear } from "console";

console.log("Your one minute timer is starting");

let counter: number = 60

const settedInt: NodeJS.Timeout =  setInterval(() => {
    if(counter > 0) {
        console.clear()
        console.log(`${counter} seconds left`);
        counter--;
    }else{
        clearInterval(settedInt)
        console.log("Time's up!");
    }
},1000)
import inquirer from "inquirer";
let randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber);
// let inputVal = await inquirer.prompt([{
//     type: "number",
//     name: "inputValue",
//     message: "Enter your number here: "
// }])
// let {inputValue} = inputVal
let chances = 2;
while (chances > 0) {
    let inputVal = await inquirer.prompt([{
            type: "number",
            name: "inputValue",
            message: "Enter your number here: "
        }]);
    let { inputValue } = inputVal;
    if (randomNumber < inputValue) {
        console.log("Please guess a small value");
    }
    else if (randomNumber > inputValue) {
        console.log("Please guess a bigger value ");
    }
    else if (inputValue === randomNumber) {
        console.log("You Won");
        break;
    }
    chances--;
}
if (chances === 0) {
    console.log("Your chances are over!");
}

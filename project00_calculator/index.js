import inquirer from "inquirer";
let answers = await inquirer.prompt([
    {
        type: "number",
        name: "numOne",
        message: "Kindly enter first Number: "
    },
    {
        type: "number",
        name: "numTwo",
        message: "Kindly enter second Number: "
    },
    {
        type: "list",
        name: "operators",
        choices: ["+", "-", "*", "/"],
        message: "Kindly enter second Number: "
    }
]);
let { numOne, numTwo, operators } = answers;
if (numOne && numTwo && operators) {
    let result = 0;
    if (operators === "+") {
        result = numOne + numOne;
    }
    else if (operators === "-") {
        result = numOne - numTwo;
    }
    else if (operators === "*") {
        result = numOne * numTwo;
    }
    else if (operators === "/") {
        result = numOne / numTwo;
    }
    console.log(`Your answer is ${result}`);
}
else {
    console.log("Kindly enter a valid number");
}
// console.log(answers)

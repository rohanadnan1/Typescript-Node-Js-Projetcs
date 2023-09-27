import inquirer from "inquirer";
let conversion = {
    "PKR": {
        "USD": 0.0035,
        "EUR": 0.0033,
        "GBP": 0.0028,
        "INR": 0.29
    },
    "USD": {
        "PKR": 287.22,
        "EUR": 0.94,
        "GBP": 0.82,
        "INR": 83.10
    },
    "EUR": {
        "PKR": 306.54,
        "USD": 1.07,
        "GBP": 0.87,
        "INR": 88.69
    },
    "GBP": {
        "PKR": 351.53,
        "USD": 1.22,
        "EUR": 1.15,
        "INR": 101.71
    },
    "INR": {
        "PKR": 3.46,
        "USD": 0.012,
        "EUR": 0.011,
        "GBP": 0.0098
    }
};
let ask = await inquirer.prompt([
    {
        type: "list",
        name: "currencyFrom",
        choices: ["PKR", "USD", "EUR", "GBP", "INR"],
        message: "From which currency?",
    },
    {
        type: "list",
        name: "currencyTo",
        choices: ["PKR", "USD", "EUR", "GBP", "INR"],
        message: "To which currency?",
    },
    {
        type: "number",
        name: "amount",
        message: "How much?",
    }
]);
let { currencyFrom, currencyTo, amount } = ask;
let rupee = currencyTo === "PKR" || currencyTo === "INR" ? " Rs" : "";
let dollar = currencyTo === "USD" ? " $" : "";
let eur = currencyTo === "EUR" ? " €" : "";
let pound = currencyTo === "GBP" ? " £" : "";
if (currencyFrom && currencyTo && amount) {
    let result = conversion[currencyFrom][currencyTo] * amount;
    console.log(`Your amount from ${currencyFrom} to ${currencyTo} is ${Math.round(result)}${rupee || dollar || eur || pound}`);
}
else {
    console.log("Invalid input");
}

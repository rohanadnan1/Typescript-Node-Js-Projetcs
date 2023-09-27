import inquirer from "inquirer";
let userData = await inquirer.prompt([
    {
        type: "string",
        name: "userId",
        message: "Please enter your User id"
    },
    {
        type: "number",
        name: "userPin",
        message: "Please Enter you pin"
    }
]);
let customer = [
    {
        id: "rohan",
        pin: 1234,
        balance: Math.floor(Math.random() * 10000)
    },
    {
        id: "umar",
        pin: 4321,
        balance: Math.floor(Math.random() * 10000)
    },
    {
        id: "daniyal",
        pin: 2468,
        balance: Math.floor(Math.random() * 10000)
    }
];
let customerFound = false;
for (let i = 0; i < customer.length; i++) {
    if (userData.userId === customer[i].id && userData.userPin === customer[i].pin) {
        console.log(`Welcome ${customer[i].id.charAt(0).toUpperCase() + customer[i].id.slice(2)} your balance is ${customer[i].balance} Rs`);
        customerFound = true;
    }
}
if (customerFound === false) {
    console.log("Your given information is wrong");
}

import chalk from "chalk";
import inquirer from "inquirer";
class Player {
    constructor(name) {
        this.name = name;
        this.fuel = 100;
        this.drinkAvailable = true;
    }
    decreseFuel() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    increaseFuel() {
        this.fuel = 100;
    }
}
class Opponent {
    constructor(name) {
        this.name = name;
        this.fuel = 100;
    }
    decreseFuel() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
let player = await inquirer.prompt({
    type: "input",
    name: "name",
    message: "What is your name?",
});
let opponent = await inquirer.prompt({
    type: "list",
    name: "villian",
    message: "Choose your villian",
    choices: ["Pennywise", "Hennibal Lector", "The Riddler"],
});
let p1 = new Player(player.name);
let o1 = new Opponent(opponent.villian);
// console.log(p1.name);
// console.log(o1.name);
while (true) {
    if (o1.name == "Pennywise") {
        let strategy = await inquirer.prompt({
            type: "list",
            name: "strategy",
            message: "Choose your strategy",
            choices: ["Attack", "Drink Health", "Run"],
        });
        if (strategy.strategy == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num == 0) {
                if (p1.fuel > 25) {
                    p1.decreseFuel();
                    console.log(`${chalk.bold.italic.blue(`${p1.name} has ${p1.fuel} fuel`)}`);
                    console.log(`${chalk.bold.italic.blue(`${o1.name} has ${o1.fuel} fuel`)}`);
                }
                else if (p1.fuel <= 25) {
                    console.log(`${chalk.bold.red(`You ran out of fuel you lose`)}`);
                    process.exit();
                }
            }
            if (num == 1) {
                if (o1.fuel > 25) {
                    o1.decreseFuel();
                    console.log(`${chalk.bold.italic.blue(`${p1.name} has ${p1.fuel} fuel`)}`);
                    console.log(`${chalk.bold.italic.blue(`${o1.name} has ${o1.fuel} fuel`)}`);
                }
                else if (o1.fuel <= 25) {
                    console.log(`${chalk.bold.green(`Your opponent ran out of fuel You Won`)}`);
                    process.exit();
                }
            }
        }
        if (strategy.strategy == "Drink Health") {
            if (p1.drinkAvailable) {
                p1.increaseFuel();
                p1.drinkAvailable = false;
            }
            else {
                console.log(`${chalk.bold.red(`You have already used your energy drink`)}`);
            }
        }
        if (strategy.strategy == "Run") {
            console.log(`${p1.name} you're a coward! YOU LOOOOOOSE`);
            process.exit();
        }
    }
    if (o1.name == "Hennibal Lector") {
        let strategy = await inquirer.prompt({
            type: "list",
            name: "strategy",
            message: "Choose your strategy",
            choices: ["Attack", "Drink Health", "Run"],
        });
        if (strategy.strategy == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num == 0) {
                if (p1.fuel > 25) {
                    p1.decreseFuel();
                    console.log(`${chalk.bold.italic.blue(`${p1.name} has ${p1.fuel} fuel`)}`);
                    console.log(`${chalk.bold.italic.blue(`${o1.name} has ${o1.fuel} fuel`)}`);
                }
                else if (p1.fuel <= 25) {
                    console.log(`${chalk.bold.red(`You ran out of fuel you lose`)}`);
                    process.exit();
                }
            }
            if (num == 1) {
                if (o1.fuel > 25) {
                    o1.decreseFuel();
                    console.log(`${p1.name} has ${p1.fuel} fuel`);
                    console.log(`${o1.name} has ${o1.fuel} fuel`);
                }
                else if (o1.fuel <= 25) {
                    console.log(`${chalk.bold.green(`Your opponent ran out of fuel You Won`)}`);
                    process.exit();
                }
            }
        }
        if (strategy.strategy == "Drink Health") {
            if (p1.drinkAvailable) {
                p1.increaseFuel();
                p1.drinkAvailable = false;
            }
            else {
                console.log(`${chalk.bold.red(`You have already used your energy drink`)}`);
            }
        }
        if (strategy.strategy == "Run") {
            console.log(`${p1.name} you're a coward! YOU LOOOOOOSE`);
            process.exit();
        }
    }
    if (o1.name == "The Riddler") {
        let strategy = await inquirer.prompt({
            type: "list",
            name: "strategy",
            message: "Choose your strategy",
            choices: ["Attack", "Drink Health", "Run"],
        });
        if (strategy.strategy == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num == 0) {
                if (p1.fuel > 25) {
                    p1.decreseFuel();
                    console.log(`${p1.name} has ${p1.fuel} fuel`);
                    console.log(`${o1.name} has ${o1.fuel} fuel`);
                }
                else if (p1.fuel <= 25) {
                    console.log(`${chalk.bold.red(`You ran out of fuel you lose`)}`);
                    process.exit();
                }
            }
            if (num == 1) {
                if (o1.fuel > 25) {
                    o1.decreseFuel();
                    console.log(`${p1.name} has ${p1.fuel} fuel`);
                    console.log(`${o1.name} has ${o1.fuel} fuel`);
                }
                else if (o1.fuel <= 25) {
                    console.log(`${chalk.bold.green(`Your opponent ran out of fuel You Won`)}`);
                    process.exit();
                }
            }
        }
        if (strategy.strategy == "Drink Health") {
            if (p1.drinkAvailable) {
                p1.increaseFuel();
                p1.drinkAvailable = false;
            }
            else {
                console.log(`${chalk.bold.red(`You have already used your energy drink`)}`);
            }
        }
        if (strategy.strategy == "Run") {
            console.log(`${chalk.bold.red(`${p1.name} you're a coward! YOU LOOOOOOSE`)}`);
            process.exit();
        }
    }
}

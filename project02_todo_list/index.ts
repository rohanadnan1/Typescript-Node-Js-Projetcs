import inquirer from "inquirer";

let todos: string[] = [];
let isLooped = true;



while(isLooped){

let task: {
    askTask: string;
    checkTask: boolean;
} = await inquirer.prompt([
    {
        type: "input",
        name: "askTask",
        message: "Enter your task: "
    },
    {
        type: "confirm",
        name: "checkTask",
        message: "Do you want to add more task?",
        default: false
    }
])

let {askTask, checkTask } = task

    if(askTask){
        todos.push(askTask)
    }else{
        console.log("Kindly enter valid task")
    }

    isLooped = checkTask
}


todos.forEach((todo, index)=>{
   console.log(`Task ${index + 1} : ${todo}`)
 })

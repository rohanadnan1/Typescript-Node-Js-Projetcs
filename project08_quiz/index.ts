import inquirer from "inquirer"

let question = [
    {
        question: "What is the full form of HTML?",
        choices: ["HyperText Markup Language", "HyperText Building Language", "HyperText Logic Language", "HyperText Testing Language"],
        correct: "HyperText Markup Language"
    
    },
    {
    
        question: "What is the full form of CSS?",
        choices: ["Cascading Smack Sheet", "Cascading Style Sheet", "Cascading Smash Sheet", "Cascading Super Sheet"],
        correct: "Cascading Style Sheet"
    
    },
    {
        question: "What is the full form of JS?",
        choices: ["JavaSmack", "JavaSmash", "JavaScript", "JavaSchool"],
        correct: "JavaScript"
    },
    {
        question: "What is the full form of TS?",
        choices: ["TypeSmack", "TypeSmash", "TypeScript", "TypeSchool"],
        correct: "TypeScript"
    },
    {

        question: "What is the full form of JSON?",
        choices: ["JavaSmack Object", "JavaSmash Object Orientation", "JavaScript Object Notation", "JavaSchool System"],
        correct: "JavaScript Object Notation"
    },
    {
        
        question: "What is the full form of API?",
        choices: ["Application Programming Interface", "Application Programming Interpol", "Application Programming Internet", "Application Programming Interunity"],
        correct: "Application Programming Interface"
    },
    {
        
        question: "What is the full form of OS?",
        choices: ["Operating System", "Operation System", "Operating System Unit", "Operation System Appllication"],
        correct: "Operating System"
    },
    {
     
        question: "What is the full form of DBMS?",
        choices: ["Database Management System", "Database Management System ID", "Database Management System Application", "Database Management System Interpolation"],
        correct: "Database Management System"
    },
    {
   
        question: "What is the full form of MVC?",
        choices: ["Model View Controller Smack", "Model View Controller", "Model View Controller Unit", "Model View Controller Id"],
        correct: "Model View Controller"
    },
    {
        question: "What is the full form of PY?",
        choices: ["Python", "Blockchain", "Ai", "Gen AI"],
        correct: "Python"
    }
    
]


async function main() {

    let score = 0

   for(let i = 0; i < question.length; i++){
       let answer = await inquirer.prompt([{
        type: "list",
        name: "answer",
        message: question[i].question,
        choices: question[i].choices
       }])
       
       if(answer.answer === question[i].correct){
           score ++
       }
   }

   console.log(`Your score is ${score} out of ${question.length}`)
}

main()
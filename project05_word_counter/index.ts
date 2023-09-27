import inquirer from 'inquirer';

let paragraph:{
    paragraphInput: string
} = await inquirer.prompt([{
    type: 'input',
    name: 'paragraphInput',
    message: 'Enter a paragraph'
}])

let {paragraphInput} = paragraph

let toWords = paragraphInput.split(' ')
let toAlphabets = paragraphInput.replace(/ /g, "").split('')
console.log(`There are ${toWords.length} words and ${toAlphabets.length} alphabets in the paragraph`)
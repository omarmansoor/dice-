#! /usr/bin/env node
import inquirer from "inquirer";
//(1) computer will generate a random number
//(2) user input for guessing number
//(3) compare user input with ciomputer genrated number and show result
const randomnumber = Math.floor(Math.random() * 10);
const answers = await inquirer.prompt([
    {
        name: "userguessednumber",
        type: "number",
        message: "please guess a number between 1-6: ",
    },
]);
if (answers.userguessednumber === randomnumber) {
    console.log("congtratulations! you guessed right number.");
}
else {
    console.log("you guessed wrong number");
}

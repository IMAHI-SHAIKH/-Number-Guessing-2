#! /usr/bin/env node
import inquirer from "inquirer";
//
const ranNum = Math.floor(Math.random() * 6 + 1);
//console.log(ranNum);
const numguess = await inquirer.prompt([
    {
        name: "UserNumber",
        type: "number",
        message: "Please guess any number b/w 1 ~ 6:    ",
    },
]);
if (numguess.UserNumber === ranNum) {
    console.log("Congragulations!, you guessed ", numguess.UserNumber, " which is correct");
}
else {
    console.log("Sorry you guessed it wrong, my supposition: ", ranNum, ", but you guessed: ", numguess.UserNumber);
}

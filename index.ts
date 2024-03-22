#! /usr/bin/env node


import inquirer from "inquirer";
const asnwer = await inquirer.prompt([
  { message: "Enter your first number", type: "number", name: "firstNumber" },
{message: "Enter your second number", type: "number", name: "SecondNumber"},
{message: "Select one of the operators to perform operation",
type: "list",
name: "operator",
choices: ["Addition" , "Subtraction", "Multiplication", "Division"],
},
]);

//conditional statement
if (asnwer.operator === "Addition"){
    console.log(asnwer.firstNumber +asnwer.SecondNumber);
} else if(asnwer.operator === "Subtraction"){
    console.log(asnwer.firstNumber - asnwer.SecondNumber);
} else if(asnwer.operator === "Multiplication")
    console.log(asnwer.firstNumber * asnwer.SecondNumber);
    else if(asnwer.operator === "Division"){
        console.log(asnwer.firstNumber / asnwer.SecondNumber);
} else{
    console.log("Please select valid operator");
}
console.log("The End");
import inquirer from "inquirer";

const answers : {
    numberOne: number,
    numberTwo: number,
    operator: string
} = await inquirer.prompt([
    {
        type: "number",
        name: "numberOne",
        message: "Kindly enter your first no: "
    },
    {
        type: "number",
        name: "numberTwo",
        message: "Kindly enter your second no: "
    },
    {
        type: "list",
        name: "operator",
        choices: ["*", "+", "-", "/"],
        message: "Select Operator: "
    },
]);

const {numberOne, numberTwo, operator}=answers;

let result: number;
if(operator==="+")
{result=numberOne+numberTwo;} 
 else if (operator === "-"){result=numberOne-numberTwo;}
 else if(operator==="*"){result=numberOne*numberTwo}
 else{result=numberOne/numberTwo};
 
 console.log("Answer is:",result);
 
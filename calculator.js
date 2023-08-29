import inquirer from "inquirer";
const answers = await inquirer.prompt([
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
const { numberOne, numberTwo, operator } = answers;
let result;
if (operator === "+") {
    result = numberOne + numberTwo;
}
else if (operator === "-") {
    result = numberOne - numberTwo;
}
else if (operator === "*") {
    result = numberOne * numberTwo;
}
else {
    result = numberOne / numberTwo;
}
;
console.log("Answer is:", result);

import inquirer from "inquirer";
import Choices from "inquirer/lib/objects/choices.js";

const atm = await inquirer.prompt([
  {
    type:"input",
    name:"UserId",
    message:"Enter your Id"
  },
  {
    type:"number",
    name:"UserPassword",
    message:"Enter your Password"
  },
  {
    type:"list",
    name:"Transaction Type",
    message:"Choose between:",
    choices:["Cash Withdrawal","Transfer"]

  },
  {
    type:"list",
    name:"Withdrawal Amount",
    choices:["1000","5000","10,000"],  
    }
])

  

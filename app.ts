import inquirer from "inquirer";


const Sysytemgeneratednumber=Math.floor(Math.random()*10)

const answers= await inquirer.prompt([
    {
        type:"number",
        name:"Userguess",
        message:"Enter your Guess"
    }
])

const {Userguess}=answers;
if (Sysytemgeneratednumber=== Userguess){
    console.log("Congratulations You Won")}
    else{ console.log(`Wrong Answer. Correct answer is ${Sysytemgeneratednumber}`)
}
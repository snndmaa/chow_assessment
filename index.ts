const readline = require("readline")
import Operate from "./operations"

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

input.question("Enter first digit. => ", function(digit1:string) {
    input.question("Enter Operation. e.g * + - / => ", function(action:string){
        input.question("Enter second digit. =>", function(digit2:string) {
            try{
                const transDigit1: number = parseInt(digit1)
                const transDigit2: number = parseInt(digit2)
                new Operate(transDigit1, transDigit2, action).checker()
            }
            catch(error){
                console.log('Invalid Input. Please try again!')
            }
            input.close();
        })
    })
})

input.on("close", function() {
    console.log("\nProcess Completed");
    process.exit(0);
})

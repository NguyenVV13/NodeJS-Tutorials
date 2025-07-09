/**
 * Reading inputs and creating outputs from a chosen interface
 * using the readline module
 */
const readline = require('readline');
// Takes input from stdin (terminal input), outputs to terminal
const interface = readline.createInterface({input: process.stdin, output: process.stdout});

// Create a number ranging from 1-10
// Math.random() makes a pseudorandom decimal between integers 0 and 1
// Multiplying by integer 10 makes an integer from 0-9, then add 1
let num1 = Math.floor(Math.random()*10 + 1);
let num2 = Math.floor(Math.random()*10 + 1);
let sum = num1 + num2;

// question() has the question prompt (query) as the first parameter,
// then the function as the second parameter
interface.question(`What is ${num1} + ${num2}? `, (userInput) => {
    // Important to use trim() to remove extra whitespace
    if(userInput.trim() == sum)
        // Emit 'close'
        interface.close();
    else {
        interface.setPrompt(`Your answer of ${userInput.trim()} was incorrect. Please try again. `);
        // Prints the prompt and waits to receive user input, which emits 'line'
        interface.prompt();
        // This is effectively a loop
        interface.on('line', (userInput) => {
            if(userInput.trim() == sum)
                interface.close();
            else {
                interface.setPrompt(`Your answer of ${userInput.trim()} was incorrect. Please try again. `);
                interface.prompt();
            }
        })
    }
});

interface.on('close', () => {
    console.log(`That is correct! The answer is ${sum}!`);
});
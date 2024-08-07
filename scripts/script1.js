let globalVariable = "I am a global variable";

function myFunction(){
    console.log(globalVariable);

    let localVariable = "I am a local variable";
    console.log(localVariable);
}

function myOtherFunction(){
    console.log(globalVariable);

    // console.log(localVariable)
}
// myFunction();
// myOtherFunction();

function greet(name) {
    console.log("Hello, " + name);
}

// greet("Ryan")

let names = ["Michael", "Dan", "Bob", "Ted"];

// for (let i = 0; i < names.length; i++) {
//     greet(names[i]);
// }

function addNumbers(num1, num2) {
    return num1 + num2;
}

// console.log(addNumbers(5, 2));

//Challenge 1 - Double Number

function doubleNumber(num){
    return num * 2;
}
let result1 = doubleNumber(2)
let result2 = doubleNumber(9)

console.log(result1)
console.log(result2)

//Getting values from the prompt
// let sampleNum = parseInt(prompt("Enter a number:"))
// console.log(sampleNum * 2);

//Challenge 2
function rectangleArea(length, width){
    let area = length * width
    return area
}
// let length = Number(prompt("Enter the length:"));
// let width = Number(prompt("Enter the width:"));
//
// let area = rectangleArea(length, width)
// console.log(`The area of your rectangle is ${area}.`);


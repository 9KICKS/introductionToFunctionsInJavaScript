// var addition = (firstNumber, secondNumber) => {
//     return firstNumber + secondNumber
// }
// console.log(addition(10,5));

let addition = (firstNumber, secondNumber) => firstNumber + secondNumber;
console.log(addition(10,5));

console.log();

addition = firstNumber => firstNumber * 2;
console.log(addition(5));

console.log();

addition = () => console.log("Shop 9Kicks!");
addition();

console.log();

addition = colour => ({"bala": colour});
console.log(addition("blue"));

console.log();

addition = colour => {
    return {"bala": colour}
};
console.log(addition("blue"));

console.log();

function helloWorld(func) {
    console.log("I'm in here right now!");
    func()
    console.log("After the function");
}
helloWorld(() => console.log("I'm the function"));

// function me() {
//     console.log("I'm the function")
// }
// helloWorld(me);
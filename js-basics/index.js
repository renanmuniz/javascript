let selectedColors = ['red', 'green'];
console.log(selectedColors); //[ 'red', 'green' ]
console.log(selectedColors[0]); //red
console.log(selectedColors[1]); //green
console.log(selectedColors[2]); //undefined

//Adicionando itens ao array:
//Adicionando ao final com push:
selectedColors.push('blue');
console.log(selectedColors); //[ 'red', 'green', 'blue' ]

//Adicionando no começo do array:
selectedColors.unshift('yellow');
console.log(selectedColors); //[ 'yellow', 'red', 'green', 'blue' ]

//Adicionando em uma posição específica com .splice:
selectedColors.splice(1, 1, 'brown'); //Posicao:1 RemoveAtual:1 Valor:'brown'
console.log(selectedColors); //[ 'yellow', 'brown', 'green', 'blue' ]

selectedColors.splice(1, 0, 'purple'); //Posicao:1 RemoveAtual:0 Valor:'purple'
console.log(selectedColors); //[ 'yellow', 'purple', 'brown', 'green', 'blue' ] 

//Adicionando em posição específica pelo índice(substitui se já tiver valor nele):
selectedColors[5] = 'black'
console.log(selectedColors); //[ 'yellow', 'purple', 'brown', 'green', 'blue', 'black' ]

selectedColors[2] = 'white'
console.log(selectedColors); //[ 'yellow', 'purple', 'white', 'green', 'blue', 'black' ]

//Adicionando pulando psoições preenchidas:
selectedColors[7] = 'gray'
console.log(selectedColors); //['yellow','purple','white','green','blue','black',<1 empty item>,'gray']

//functions
function greetWithNoArguments() {
    console.log('Hello World');
}
greetWithNoArguments(); //Hello World

function greetWithArguments(name) {
    console.log('Hello ' + name);
}
greetWithArguments('John'); //Hello John
greetWithArguments('Mary'); //Hello Mary

//function that returns value:
function square(number) {
    return number * number;
}
let result = square(2);
console.log(result)

console.log(square(3));

// Operators
let x = 10;
let y = 3;

console.log(x + y); //13
console.log(x - y); //7
console.log(x * y); //30
console.log(x / y); //3.33333333333
console.log(x % y); //1
console.log(x ** y); //1000

x = 10;

console.log(x); //10
console.log(++x); //11 incremented first then printed
console.log(x++); //11 printed first then incremented
console.log(x); //12

x = 10;

console.log(x); //10
console.log(--x); //9 incremented first then printed
console.log(x--); //9 printed first then decremented
console.log(x); //8

//Assignment Operators
console.log('Assignment Operators')
let x2 = 10;
x2 += 1;
console.log(x2); //11

let x3 = 10;
x3 *= 2;
console.log(x3); //20

//Comparison Operators
console.log('Comparison Operators')
let x4 = 1;
console.log(x4 > 0); //true
console.log(x4 > 10); //false
console.log(x4 >= 1); //true
console.log(x4 <= 1); //true
console.log(x4 === 1); //true
console.log(x4 !== 1); //false

//Ternary Operators
console.log('Ternary Operators')

let points = 110;
let type = points > 100 ? 'gold' : 'silver';
console.log(type); //gold

// Logical Operators
console.log('Logical Operators');
//AND &&
console.log('AND Operator &&');
console.log(true && true); //true
console.log(true && false); //false
console.log(false && true); //false
console.log(false && false); //false

//OR ||
console.log('OR Operator ||');
console.log(true || true); //true
console.log(true || false); //true
console.log(false || true); //true
console.log(false || false); //false

// NOT !
console.log('NOT Operator !');
console.log(!true); //false
console.log(!false); //true

// Logical operator with non-booleans values
console.log('Logical operator with non-booleans values');
console.log(false || 'John'); //John
console.log(false || 9); //9
console.log(false || undefined); //undefined
console.log(false || null); //null
console.log(null || 9); //9
console.log(undefined || 9); //9
console.log(false || 1 || 2 || 3); //1

//Practical usage:
let userColor = 'red';
let defaultColor = 'blue (default)';
let currentColor = userColor || defaultColor;
console.log('COLOR: ' + currentColor); //red

userColor = undefined;
currentColor = userColor || defaultColor;
console.log('COLOR: ' + currentColor); //blue (default)

// Conditional Statements
//if-else statement
let hour = 12; // Change this value to test different outputs
if (hour < 12) {
    console.log('Good morning');
} else if (hour >= 12 && hour < 18) {
    console.log('Good afternoon');
} else {
    console.log('Good evening');
}

//switch-case statement
console.log('switch-case statement');
let role;
role = 'moderator';

switch (role) {
    case 'guest':
        console.log('Guest user');
        break;
    case 'moderator':
        console.log('Moderator user');
        break;
    case 'admin':
        console.log('Admin user');
        break;
    default:
        console.log('Unknown user role');
}

//For loop
console.log('For loop:');

for (let i = 0; i < 5; i++) {
    console.log('For Iteration: ' + i);
}

//While loop
console.log('While loop:');
let i = 0;
while (i < 5) {
    console.log('While Iteration: ' + i);
    i++;
}

//Do-While loop
console.log('Do-While loop:');
let j = 0;
do {
    console.log('Do-While Iteration: ' + j);
    j++;
} while (j < 5);

//For...in loop
//Used to iterate over object properties
//Not recommended for arrays as it iterates over all enumerable properties, not just array indices.
console.log('For...in loop:');
const person = {
    name: 'John',
    age: 30,
    city: 'New York'
};

for (let key in person)
    console.log(key + ': ' + person[key]);

//For...of loop
//Used to iterate over iterable objects like arrays, strings, etc.
console.log('For...of loop:');
const colors = ['red', 'green', 'blue'];
for (let color of colors) {
    console.log(color);
}

//ForEach loop
//Used to iterate over arrays, providing a cleaner syntax than for loops.
console.log('ForEach loop:');
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function (number) {
    console.log('Number: ' + number);
});

//ForEach with arrow function
console.log('ForEach with arrow function:');
numbers.forEach(number => console.log('Number: ' + number));

//ForEach with arrow function and index
console.log('ForEach with arrow function and index:');
numbers.forEach((number, index) => {
    console.log('Index: ' + index + ', Number: ' + number);
});

//Break and Continue
console.log('Break and Continue:');
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        console.log('Breaking at i = ' + i);
        break; // Exits the loop when i is 5
    }
    console.log('i = ' + i);
}

for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        console.log('Skipping even number: ' + i);
        continue; // Skips the rest of the loop for even numbers
    }
    console.log('Odd number: ' + i);
}
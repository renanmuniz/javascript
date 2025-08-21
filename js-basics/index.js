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


// OBJECTS
console.log('OBJECTS');

const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function () {
        console.log('draw');
    }
}

circle.draw();

// Factory Function
function createCircle(radius) {
    return {
        radius,

        draw() {
            console.log('draw');
        }
    };
}

const circle1 = createCircle(1);
console.log(circle1);
circle1.draw();

const circle2 = createCircle(2);
console.log(circle2);
circle2.draw();

// Constructor Function
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    };
}

const circle3 = new Circle(3);
console.log(circle3);
circle3.draw();

function Person(name, age) {
    this.name = name;
    this.age = age;

    this.speak = function() {
        console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
    };
}

const p1 = new Person('Renan', 30);
const p2 = new Person('Maria', 25);

p1.speak();
p2.speak();

// Value VS Reference Types
console.log('Value VS Reference Types');
console.log('Primitives values are copied by value, while reference types are copied by reference.');
let x5 = 10; // Primitive type (number)
let y5 = x5; // Value copy
console.log('x5:', x5); // 10
console.log('y5:', y5); // 10

x5 = 20; // Changing x5 does not affect y5
console.log('After changing x5:');
console.log('x5:', x5); // 20
console.log('y5:', y5); // 10

console.log('Reference types are copied by reference, meaning changes to the original object affect the copy.');
const obj1 = { value: 10 }; // Reference type (object)
const obj2 = obj1; // Reference copy
console.log('obj1:', obj1); // { value: 10 }
console.log('obj2:', obj2); // { value: 10 }
obj1.value = 20; // Changing obj1 value to 20 affects obj2
console.log('After changing obj1:');
console.log('obj1:', obj1); // { value: 20 }
console.log('obj2:', obj2); // { value: 20 }

// Cloning Objects
console.log('Cloning Objects');
const original = { a: 1, b: 2, c: 3 };

// Using Object.assign
const clone1 = Object.assign({}, original);
console.log('Clone1:', clone1); // { a: 1, b: 2, c: 3 }

// Modifying the clone does not affect the original
console.log('Modifying clone1:');
clone1.a = 10;
clone1.b = 20;
clone1.c = 30;

console.log('Original:', original); // { a: 1, b: 2, c: 3 }
console.log('Clone1:', clone1); // { a: 10, b: 20, c: 30 }

// Using spread operator
const clone2 = { ...original };
console.log('Clone2:', clone2); // { a: 1, b:2, c: 3 }
clone2.a = 11;
clone2.b = 22;
clone2.c = 33;
console.log('After modifying clone2:');
console.log('Original:', original); // { a: 1, b: 2, c: 3 }
console.log('Clone2:', clone2); // { a: 11, b: 22, c: 33 }

// Math Object:
console.log('Math Object:');
console.log('Math.PI:', Math.PI); // 3.141592653589793
console.log('Math.E:', Math.E); // 2.718281828459045
console.log('Math.abs(-10):', Math.abs(-10)); // 10
console.log('Math.max(1, 2, 3):', Math.max(1, 2, 3)); // 3
console.log('Math.min(1, 2, 3):', Math.min(1, 2, 3)); // 1
console.log('Math.random():', Math.random()); // Random number between 0 and 1
console.log('Math.floor(3.7):', Math.floor(3.7)); // 3
console.log('Math.ceil(3.1):', Math.ceil(3.1)); // 4
console.log('Math.round(3.5):', Math.round(3.5)); // 4
console.log('Math.pow(2, 3):', Math.pow(2, 3)); // 8
console.log('Math.sqrt(16):', Math.sqrt(16)); // 4
console.log('Math.random() * 100:', Math.random() * 100); // Random number between 0 and 100x

// Strings
console.log('Strings:');

let message = 'Hello, World!';

console.log('Original message:', message); // Hello, World!
console.log('Length of message:', message.length); // 13
console.log('Uppercase:', message.toUpperCase()); // HELLO, WORLD!
console.log('Lowercase:', message.toLowerCase()); // hello, world!
console.log('Substring (0, 5):', message.substring(0, 5));

const str1 = 'Hello';
console.log(typeof str1); // string

const str2 = new String('Hello');
console.log(typeof str2); // Object

// Template Literals
console.log('Template Literals:');
const message2 =
`Hello, World!
This is a template literal example.
Thanks you,
Renan.`;
console.log(message2);

const name = 'John';
const age = 30;
const greeting = `My name is ${name} and I am ${age} years old.`;
console.log(greeting); // My name is John and I am 30 years old.

// Date Object
console.log('Date Object:');
const now = new Date();
console.log('Current Date and Time:', now); // Current Date and Time: [current date and time]
console.log('Year:', now.getFullYear()); // Year: [current year]
console.log('Month:', now.getMonth() + 1); // Month: [current month] (0-11, so +1 to get 1-12)
console.log('Date:', now.getDate()); // Date: [current date] (1-31)
console.log('Day:', now.getDay()); // Day: [current day] (0-6, where 0 is Sunday)
console.log('Hours:', now.getHours()); // Hours: [current hour] (0-23)
console.log('Minutes:', now.getMinutes()); // Minutes: [current minute] (0-59)
console.log('Seconds:', now.getSeconds()); // Seconds: [current second] (0-59)
console.log('Milliseconds:', now.getMilliseconds()); // Milliseconds: [current millisecond] (0-999)
console.log('ISO String:', now.toISOString()); // ISO String: [current date and time in ISO format]
console.log('Locale String:', now.toLocaleString()); // Locale String: [current date and time in locale format]
console.log('Locale Date String:', now.toLocaleDateString()); // Locale Date String: [current date in locale format]
console.log('Locale Time String:', now.toLocaleTimeString()); // Locale Time String: [current time in locale format]

//Example with Timezone
const dateInNewYork = new Date('2025-08-21T12:00:00-04:00'); // New York is UTC-4
console.log('Date in Sao Paulo:', dateInNewYork.toLocaleString('en-US', { timeZone: 'America/Sao_Paulo' })); // Date in Sao Paulo: 21/8/2025, 13:00:00 PM
const dateInTokyo = new Date('2023-10-01T12:00:00+09:00'); // Tokyo is UTC+9
console.log('Date in Tokyo:', dateInTokyo.toLocaleString('en-US', { timeZone: 'Asia/Tokyo' })); // Date in Tokyo: 10/1/2023, 1:00:00 AM
//UTC Date
const utcDate = new Date(Date.UTC(2025, 8, 21, 12, 0, 0)); // Months are 0-indexed
console.log('UTC Date:', utcDate.toISOString()); // UTC Date: 2025-08-21T12:00:00.000Z
console.log('UTC Date in Local Timezone:', utcDate.toLocaleString()); // UTC Date in Local Timezone: [date and time in local timezone]

//Converting between Timezones
// Convert UTC to GMT-3
const utcDate2 = new Date('2025-08-21T12:00:00Z');
console.log('UTC Date:', utcDate2.toISOString()); // UTC Date: 2025-08-21T12:00:00.000Z
const gmtMinus3 = utcDate2.toLocaleString('en-US', { timeZone: 'America/Sao_Paulo' });
console.log('UTC to GMT-3: ', gmtMinus3); // Shows date/time in GMT-3


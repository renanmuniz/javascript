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

//Arrays
console.log('Arrays:');
const numbers2 = [1, 2, 3, 4, 5];
console.log(numbers2); // Original array: [1, 2, 3, 4, 5]

numbers2.push(6);
console.log(numbers2); // Original array: [1, 2, 3, 4, 5, 6]

numbers2.unshift(0);
console.log(numbers2); // Original array: [0, 1, 2, 3, 4, 5, 6]

numbers2.splice(3, 0, 2.5); // Insert 2.5 at index 3
console.log(numbers2); // Original array: [0, 1, 2, 2.5, 3, 4, 5, 6]

//Finding primitives elements
console.log('Finding primitives elements:');
console.log('Index of 3:', numbers2.indexOf(3)); // Index of 3: 4
console.log('Index of 10:', numbers2.indexOf(10)); // Index of 10: -1 (not found)
console.log('Includes 4:', numbers2.includes(4)); // Includes 4: true
console.log('Includes 10:', numbers2.includes(10)); // Includes 10: false

//Finding reference elements
console.log('Finding reference elements:');
const courses = [
    { id: 1, name: 'Node.js' },
    { id: 2, name: 'JavaScript' },
    { id: 3, name: 'React' }
];
const course = courses.find(function(course) {
    return course.name === 'JavaScript';
});
console.log('Course found:', course); // Course found: { id: 2, name: 'JavaScript' }

//Using arrow function
const course2 = courses.find(c => c.name === 'React');
console.log('Course found with arrow function:', course2); // Course found with arrow function: { id: 3, name: 'React' }

// Removing elements
console.log('Removing elements:');

console.log('Removing the last element:');
numbers2.pop();
console.log('Array after pop:', numbers2); // Array after pop: [0, 1, 2, 2.5, 3, 4, 5]

console.log('Removing the first element:');
numbers2.shift();
console.log('Array after shift:', numbers2); // Array after shift: [1, 2, 2.5, 3, 4, 5]

console.log('Removing element at index 2:');
numbers2.splice(2, 1); // Remove 1 element at index 2
console.log('Array after splice:', numbers2); // Array after splice: [1, 2, 3, 4, 5]

// Emptying an array
console.log('Emptying an array:');
let arrayToEmpty = [1, 2, 3, 4, 5];
console.log('Original array:', arrayToEmpty); // Original array: [1, 2, 3, 4, 5]

// Solution 1: Reassign to a new empty array
arrayToEmpty = [];
console.log('After reassigning to []:', arrayToEmpty); // After reassigning to []: []

// Solution 2: Set length to 0
arrayToEmpty = [1, 2, 3, 4, 5];
arrayToEmpty.length = 0;
console.log('After setting length to 0:', arrayToEmpty); // After setting length to 0: []

// Solution 3: Splice the entire array
arrayToEmpty = [1, 2, 3, 4, 5];
arrayToEmpty.splice(0, arrayToEmpty.length);
console.log('After splice(0, length):', arrayToEmpty); // After splice(0, length): []

// Solution 4: Pop elements until empty
arrayToEmpty = [1, 2, 3, 4, 5];
while (arrayToEmpty.length > 0) {
    arrayToEmpty.pop();
}
console.log('After popping all elements:', arrayToEmpty); // After popping all elements: []

// Combining and Slicing Arrays
console.log('Combining and Slicing Arrays:');

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combined = array1.concat(array2);
console.log('Combined array using concat():', combined); // Combined array using concat(): [1, 2, 3, 4, 5, 6]

const sliced = combined.slice(2, 5);
console.log('Sliced array (index 2 to 5):', sliced); // Sliced array (index 2 to 5): [3, 4, 5]

// Spread Operator
console.log('Spread Operator:');

const combinedWithSpread = [...array1, ...array2];
console.log('Combined array using spread operator:', combinedWithSpread); // Combined array using spread operator: [1, 2, 3, 4, 5, 6]

const copyOfArray1 = [...array1];
console.log('Copy of array1 using spread operator:', copyOfArray1); // Copy of array1 using spread operator: [1, 2, 3]

// Iterating an Array
console.log('Iterating an Array:');

const letters = ['a', 'b', 'c', 'd', 'e'];
letters.forEach((letter) => {
    console.log(`Letter: ${letter}`);
});
// Letter: a
// Letter: b
// Letter: c
// Letter: d
// Letter: e

// Joining Arrays
console.log('Joining Arrays:');

const words = ['Hello', 'World', 'from', 'JavaScript'];

console.log('Joined:', words.join()); //Hello,World,from,JavaScript

const joinedWithSpace = words.join(' ');
console.log('Joined with space:', joinedWithSpace); // Joined with space: Hello World from JavaScript

const joinedWithDash = words.join('-');
console.log('Joined with dash:', joinedWithDash); // Joined with dash: Hello-World-from-JavaScript

const joinedWithEmpty = words.join('');
console.log('Joined with empty string:', joinedWithEmpty); // Joined with empty string: HelloWorldfromJavaScript


// Sorting an Array
console.log('Sorting an Array:');

const unsortedNumbers = [5, 3, 8, 1, 10 ,2];
console.log('Unsorted numbers:', unsortedNumbers); // Unsorted numbers: [5, 3, 8, 1, 2]

const sortedNumbers = unsortedNumbers.slice().sort();
console.log('Sorted numbers (default):', sortedNumbers); // Sorted numbers (default): [1, 2, 3, 5, 8]

const sortedNumbersDesc = unsortedNumbers.slice().sort((a, b) => b - a);
console.log('Sorted numbers (descending):', sortedNumbersDesc); // Sorted numbers (descending): [8, 5, 3, 2, 1]

const unsortedStrings = ['banana', 'apple', 'orange', 'mango'];
console.log('Unsorted strings:', unsortedStrings); // Unsorted strings: ['banana', 'apple', 'orange', 'mango']

const sortedStrings = unsortedStrings.slice().sort();
console.log('Sorted strings (default):', sortedStrings); // Sorted strings (default): ['apple', 'banana', 'mango', 'orange']

const sortedStringsDesc = unsortedStrings.slice().sort((a, b) => b.localeCompare(a));
console.log('Sorted strings (descending):', sortedStringsDesc); // Sorted strings (descending): ['orange', 'mango', 'banana', 'apple']


// Testing the elements of an array
console.log('Testing the elements of an array:');

const testNumbers = [1, 2, -3, 4, 5];

const allGreaterThanZero = testNumbers.every(num => num > 0);
console.log('All numbers greater than 0:', allGreaterThanZero); // All numbers greater than 0: true

const someGreaterThanThree = testNumbers.some(num => num > 3);
console.log('Some numbers greater than 3:', someGreaterThanThree); // Some numbers greater than 3: true


// Filtering an array
console.log('Filtering an array:');

const mixedNumbers = [1, -2, 3, -4, 5];

const positiveNumbers = mixedNumbers.filter(num => num > 0);
console.log('Positive numbers:', positiveNumbers); // Positive numbers: [1, 3, 5]

const negativeNumbers = mixedNumbers.filter(num => num < 0);
console.log('Negative numbers:', negativeNumbers); // Negative numbers: [-2, -4]


// Mapping an array
console.log('Mapping an array:');

const originalNumbers = [1, 2, 3, 4, 5];

const doubledNumbers = originalNumbers.map(num => num * 2);
console.log('Doubled numbers:', doubledNumbers); // Doubled numbers: [2, 4, 6, 8, 10]

const squaredNumbers = originalNumbers.map(num => num * num);
console.log('Squared numbers:', squaredNumbers); // Squared numbers: [1, 4, 9, 16, 25]


// Reducing an array
console.log('Reducing an array:');

const numsToReduce = [1, 2, 3, 4, 5];

const sum = numsToReduce.reduce((accumulator, current) => accumulator + current, 0);
console.log('Sum of numbers:', sum); // Sum of numbers: 15

const product = numsToReduce.reduce((accumulator, current) => accumulator * current, 1);
console.log('Product of numbers:', product); // Product of numbers: 120

// Function
console.log('Function');

// Function declaration
// Can be called before its declaration due to hoisting:
greet('Renan');

function greet(name) {
    console.log('Hello, ' + name);
}
greet('Alice'); // Hello, Alice

// Anonymous Function Expression
// Cannot be called before its declaration
//console.log('Square of 4:', square2(10)); // ERROR square2 is not defined

let square2 = function(number) {
    return number * number;
};

console.log('Square of 4:', square2(4)); // Square of 4: 16

let calculateSquare2 = square2;
console.log(calculateSquare2(3)); //9

// Arrow Function
// Cannot be called before its declaration
//console.log('Sum of 3 and 5:', add(3, 5)); // ERROR add is not defined

let add = (a, b) => a + b;
console.log('Sum of 3 and 5:', add(3, 5)); // Sum of 3 and 5: 8

let logMessage = message => console.log(message);
logMessage('This is an arrow function'); // This is an arrow function

// Default Parameters
function multiply(a, b = 1) {
    return a * b;
}
console.log('Multiply 5 by default b:', multiply(5)); // Multiply 5 by default b: 5
console.log('Multiply 5 by 2:', multiply(5, 2)); // Multiply 5 by 2: 10

// Function arguments
console.log('Function arguments');

function sum2(a, b) {
    return a + b;
}

console.log(sum2(1, 2)) //3
console.log(sum2(1,4,7,10)) //5
console.log(sum2(1, 'string')) //1string
console.log(sum2(1)) //NaN because it is interpreted as 1 + undefined

function sum3() {
    let total = 0;
    for (let value of arguments)
        total += value;
    return total;
}

console.log(sum3(1, 2)); //3
console.log(sum3(1,4,7,10)); //22

// The rest operator
console.log('The rest operator');

function printAllArguments(...args) {
    console.log(args);
}

printAllArguments(1, 2); //[1,2]
printAllArguments(1,4,7,10); //[1,4,7,10]
printAllArguments(1, 'string', true, { name: 'John' }); //[1,'string',true,{name:'John'}]

function sum4(...args) {
    return args.reduce((a, b) => a + b, 0);
}

console.log(sum4(1, 2)); //3
console.log(sum4(1,4,7,10)); //22

function calculateShoppingCart(discount, ...prices) {
    const total = prices.reduce((a, b) => a + b);
    return total * (1 - discount);
}

console.log('TOTAL PRICE: ' + calculateShoppingCart(0.2, 100));

// Spread operator
const numbers3 = [1, 2, 3, 4];
console.log(Math.max(numbers3)); //NaN
console.log(Math.max(...numbers3)); //4

const first = [1, 2, 3];
const second = [4, 5, 6];
const combined2 = [...first, ...second];
console.log(combined2); //[1,2,3,4,5,6]

const clone3 = [...combined2];
console.log(clone3); //[1,2,3,4,5,6]

// Default Parameters
function interest(principal, rate = 3.5, years = 5) {
    return principal * rate / 100 * years;
}

console.log(interest(10000)); //1750
console.log(interest(10000, 4.5)); //2250
console.log(interest(10000, 4.5, 10)); //4500

// Getters and Setters
console.log('Getters and Setters');

const person2 = {
    firstName: 'John',
    lastName: 'Doe',

    get fullname() {
        return `${person2.firstName} ${person2.lastName}`;
    },
    set fullNmae(value) {
       const parts = value.split(' ');
       this.firstName = parts[0];
       this.lastName = parts[1];
    }
};

console.log(person2.fullname); // John Doe

person2.fullNmae = 'Mary Jane';

console.log(person2.fullname); // Mary Jane


// Error Handling
console.log('Error Handling');

function divide(a, b) {
    if (b === 0)
        throw new Error('Division by zero is not allowed.');
    return a / b;
}

try {
    console.log(divide(10, 2)); // 5
    console.log(divide(10, 0)); // This will throw an error
} catch (error) {
    console.error('Error:', error.message); // Error: Division by zero is not allowed.
} finally {
    console.log('Execution completed.'); // This will always execute
}


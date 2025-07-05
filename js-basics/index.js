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
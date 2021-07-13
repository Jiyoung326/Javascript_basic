// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name( param1, param2 ) { body... return; }
// one function === one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// funtion is object in JS

function printHello(){
    console.log('hello!');
}
printHello();

function log( message ){
    console.log(message);
}

log('hello~~');
log(123123);

// 2.Parameters
// primitive parameters: passed by value
// object parameters: passed by reference
function changeName( obj ){
    obj.name = 'moo';
}
const hahaha = { name : 'hahaha' };
changeName( hahaha );
console.log( hahaha );

// 3. Default parameters (added in ES6)
function showMessage( message, from = 'unknown' ){
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');

// 4. Rest parameters (added in ES6)
function printAll(...args){
    console.log(args); //배열 형태로 전달된다.
    for( let i=0; i < args.length; i++ ){
        console.log( args[i] );
    }

    for( const arg of args ){
        console.log(arg);
    }

    args.forEach( arg => console.log(arg) );
}

printAll('ABC','DEF','G');

// 5. Local scope
let globalMessage = 'global';
function printMessage(){
    let message = 'hello';
    console.log( message );
    console.log( globalMessage );
    function printAnother(){
        let message = 'hello';
        console.log( message );
        let childMessage = 'hi';
    }
    // console.log( childMessage ); //error
    // return undefined; //return 타입이 없는 경우 생략되어 있는 것.
}
printMessage();

// 6. Return a value
function sum( a, b ){
    return a + b;
}
const  result = sum( 1, 2 ); //3
console.log( `sum : ${sum( 1,2 )}` );

// 7. Early return, early exit
// bad code
function upgradeUser( user ) {
    if ( user.point > 10 ) {
        // logic
    }
}
//good
function upgradeUser( user ) {
    if ( user.point <= 10 ) {
        return;  //조건이 맞지 않을 떄 함수를 빨리 종료하기
    }
    //logic
}

// First-class function
// function are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions.
// can be returned by other function

// 1. Function expression
// a function declaration can be called earlier than it is defined. (hoisted)
// a function expression is created when the execution reaches it.
const print = function (){ //anonymous function
    console.log( 'print' );
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1,3));

// 2. Callback function using function expression
function randomQuiz( answer, printYes, printNo ) {
    if ( answer === 'This is an answer' ){
        printYes();
    } else {
        printNo();
    }
}

// anonymous function
const printYes = function (){
    console.log('yss!');
}

// named function
// better debugging in debugger's stack traces
// recursions
const printNo = function print(){
    console.log('no!');
    // print();
}

randomQuiz('wrong', printYes, printNo );
randomQuiz('This is an answer', printYes, printNo );

// Arrow function
// always anonymous
const simplePrint = function () {
    console.log( 'simplePrint!' )
}

const simplePrint = () => console.log( 'simplePrint!' );
const add = ( a, b ) => a + b;
const simpleMultiply = ( a, b ) => {
    // do something more
    return a + b;
}

// IIFE : Immediately Invoked Function Expression. 선언하면서 실행
(function hello() {
    console.log( 'hellooo' );
})();
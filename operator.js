// 1. String concatenation
console.log( 'my'+ ' dog' );
console.log( '1' + 2 );
console.log( `String literals: 1 + 2 = ${ 1 + 2 }` );

// 2. Numeric operators
console.log( 1 + 2 ); //덧셈
console.log( 1 - 2 ); //뺼셈
console.log( 1 / 2 ); //나눗셈
console.log( 3 * 4 ); //곱셈
console.log( 5 % 2 ); //나머지
console.log( 5 % 3 ); //5의 3승

// 3. Increment and decrement operators
let counter = 3;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter ;
console.log( `preIncrement: ${preIncrement}, counter: ${counter}` );
const postIncrement = counter++;
// postIncremnet = counter;
// counter = counter + 1;
console.log( `postIncrement: ${postIncrement}, counter: ${counter}` );

const preDecrement = --counter;
console.log( `preDecrement: ${preDecrement}, counter: ${counter}` );
const postDecrement = counter--;
console.log( `postDecrement: ${postDecrement}, counter: ${counter}` );

// 4.Assignment operators
let x = 3;
let y = 6;
x += y ; // x = x + y
x -= y;
x *= y;
x /= y;

// 5. Comparison operators
console.log( 10 < 6 );
console.log( 10 <= 6 );
console.log( 10 > 6 );
console.log( 10 >= 6 );

// 6.Logical operators: || (or) , && (and), ! (not)
const value1 = false;
const value2 = 4<2;

//|| (or)
console.log( `or: ${ value1 || value2 || check() }` );
// expression이나 함수 호출로 인해 heavy한 것들은 뒤에 적을 것!
// 앞에서부터 검사해서 true인 것이 하나라도 있으면 뒤에는 검사하지 않기 떄문에!

console.log(`and: ${value1 && value2 && check()}`);
//마찬가지로 하나라도 false이면 무조건 false 결과를 내기 때문에 뒤에 것이 실행 x

//often used to compress long if-statement
//nullableObject && nullableObject.something

function check() {
    for ( let i = 0; i < 10 ; i++ ){
        //wasting time
        console.log('@');
    }
    return true;
}

// ! (not)
console.log( !value1 ); //true -> false , false -> true

// 7.Equality
const stringFive = '5'
const numberFive = 5;

// == loose equality, with type conversion
console.log( stringFive == numberFive ); //true
console.log( stringFive != numberFive ); //false

// === strict equality, no type conversion
console.log( stringFive === numberFive ); // false
console.log( stringFive !== numberFive ); // true

// object equality by reference
const dog1 = { name: 'coco' };
const dog2 = { name: 'coco' };
const dog3 = dog1;
console.log( dog1 == dog2 );
console.log( dog1 === dog2 );
console.log( dog1 === dog3 );

// equality test
console.log( 0 == false ); // true
console.log( 0 === false ); // false
console.log( '' == false ); // true
console.log( '' === false ); // false
console.log( null == undefined ); // true
console.log( null === undefined ); // false

// 8. Conditional operators : if
// if, else if, else
const name = 'hahaha';
if ( name === 'moo' ) {
    console.log( 'Welcome, moo' );
} else if ( name === 'yatong' ) {
    console.log( 'Welcome, yatong' );
} else {
    console.log( 'unknwon' );
}

// 9. Ternary operator : ?
// condition ? value1 : value2;
console.log( name === 'hahaha' ? 'yes' : 'no' );

// 10. Switch statement
const browser = 'Chrome';
switch (browser) {
    case 'IE'      :
        console.log( ' go away!' ); break;
    case 'Chrome'  :
    case 'Firefox' :
        console.log( 'love it' ); break;
    default        :
        console.log('hello'); break;
}

// 11. Loops
// while loop, while the condition is truthy, body code is executed.
let i = 3;
while ( 0 < i ) {
    console.log( `while: ${i}` );
    i--;
}
// do while loop, body code us excuted first, then check the condition
do {
    console.log( `do while: ${i}` );
    i--;
} while ( 0 < i );

// for loop, for ( begin; condition; step )
for ( i = 3; i > 0 ; i-- ) {
    console.log(`for : ${i}`);
}

for ( let i = 3; i > 0; i -=2 ) {
    //inline variable declaration
    console.log( `inline variable for : ${i}` );
}

//nested loops O(n^2) 때문에 피하는 게 좋음.
for ( let i = 0; i < 10 ; i++ ) {
    for ( let j = 0; j < 10 ; j++ ) {
        console.log( `i: ${i}, j: ${j}` );
    }
}

//break : loop를 끝내는 것, continue: 지금 것만 스킵하고 다음 것 진행

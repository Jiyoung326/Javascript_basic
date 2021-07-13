'use strict';

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [ 1, 2 ];

// 2. Index position
const fruits = [ '바나나', '사과' ];
console.log( fruits );
console.log( fruits.length );
console.log( fruits[0] );
console.log( fruits[1] );
console.log( fruits[2] ); // undefined
console.log( fruits[ fruits.length - 1 ] );

console.clear();
// 3. looping over an array
// print all fruits
// a. for
for ( let i = 0; i < fruits.length; i++ ) {
    console.log( fruits[i] );
}

// b. for of
for ( let fruit of fruits ) {
    console.log( fruit );
}

// c. forEach
fruits.forEach( fruit => console.log( fruit ));
fruits.forEach(function ( fruit, index, array ){
    console.log( fruit, index, array );
});

// 4. Addition, deletion, copy
// push: add an item to the end
fruits.push( '포도', '오렌지' );
console.log( fruits );

// pop : remove an item from the end
fruits.pop();
fruits.pop();
console.log( fruits );

// unshift : add an item to the beginning
fruits.unshift( '배', '딸기' );
console.log( fruits );

// shift : remove an item from the beginning
fruits.shift();
console.log( fruits );
// node ! shift, unshift are slower than pop, push

// splice: remove an item by index position
fruits.push( '블루베리', '키위' );
console.log( fruits );
fruits.splice( 1, 2 );
console.log( fruits );
fruits.splice(1, 1, '사과', '수박' );
console.log( fruits );

// combine two arrays
const fruits2 = [ '배', '딸기' ];
const newFruits = fruits.concat( fruits2 );
console.log( newFruits );

// 5. Searching

// indexOf : find the index 해당하는 값의 가장 첫번째 인덱스
console.clear();
console.log( fruits.indexOf('수박') );
console.log( fruits.indexOf('코코넛') ); // -1
// includes
console.log( fruits.includes('수박') ); // true
console.log( fruits.includes('코코넛') ); // false

// lastIndexOf
console.clear();
fruits.push( '딸기' );
console.log( fruits.indexOf('딸기') );
console.log( fruits.lastIndexOf('딸기') );

Array






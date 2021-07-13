// Objects
// one of the javaScript's data types.
// a collection of related data and/or functionality
// Nearly all objects in JavaScripts are instances of Object
// Object = { key : value }; key와 value의 집합체

// 1. Literals and properties
const obj1 = {}; //'object literal' syntax
const obj2 = new Object(); //'object constructor' syntax

function print( person ){
    console.log( person.name );
    console.log( person.age );
}

const henna = { name: 'henna', age: 15 };
print( henna );
// with JavaScript magic (dynamically typed language)
// can add properties later
// js는 타입이 동적으로 runtime 떄 결정되는 언어이기에 뒤늦게 추가 가능
henna.hasJob = true;
console.log( henna.hasJob );
delete henna.hasJob;
console.log( henna.hasJob ); //undefined

// 2. Computed properties
// key should be always string
console.log( henna.name );
console.log( henna['name'] );
henna['hasJob'] = true;
console.log( henna.hasJob );

function printValue( obj, key ){
    console.log( obj[key] ); //동적으로 키를 받아와서 사용할 때 유용
}

printValue( henna, 'name' );
printValue( henna, 'age' );

// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'deve', age: 4 };
const person4 = makePerson( 'henna', 17 );
console.log( person4 );
function makePerson( name, age ) {
    // return {
    //     name : name,
    //     age : age,
    // };
    // key와 value의 이름이 동일하면 생략 가능
    return {
        name,
        age,
    };
}

// 4. Constructor function .
const person5 = new Person( 'ellie', 30 ); //js 엔진이 오브젝트를 알아서 생성해준다
console.log( person5 );
function Person( name, age ) {
    // this = {};  생략된 부분
    this.name = name;
    this.age = age;
    // return this; 생략된 부분
}

// 5. in operator : property existence check ( key in obj )
console.log( 'name' in henna );
console.log( 'age' in henna );
console.log( 'random' in henna ); //false
console.log( henna.random ); // undefined

// 6. for .. in vs for .. of
// for ( key in obj )
console.clear();
for ( let key in henna ) {
    console.log( key );
}

// for ( value of iterable )
const array = [1,2,3,4,5]
for ( let value of array ) {
    console.log( value );
}

// 7. Cloning
// Object.assign( dest, [ obj1, obj2, obj3... ] )
const user = { name: 'kate', age: '20' };
const user2 = user;
user2.name = 'john';
console.log( user ); //user, user2의 레퍼런스가 같은 오브젝트를 가르키고 있기 때문에 john으로 바뀐 상태로 나옴

//old way
const user3 = {};
for ( let key in user ) {
    user3[key] = user[key];
}
console.clear();
console.log( user3 );

const user4 = Object.assign( {}, user );
user4.name = 'sia';
console.log( user4 );

//another example
const fruit1 =  { color : 'red' };
const fruit2 =  { color : 'blue' , size: 'big'};
const fruit3 =  { color : 'black' };
const mixed = Object.assign( {}, fruit1, fruit2, fruit3 );
console.log( mixed.color ); //black : 뒤의 source일 수록 property가 덮어 씌워짐
console.log( mixed.size );

//JSON
// Javascript Object Notation

// 1. Object to JSON
// stringfy(obj)
let json = JSON.stringify( true );
console.log( json );

json = JSON.stringify( [ 'apple', 'banana' ] );
console.log( json );

const dog = {
    name : 'coco',
    color : 'blue',
    size : null,
    birthDate : new Date(),
    symbol : Symbol('id'), //js에만 있는 데이터도 json에 포함 X
    jump: () => {
        console.log( `${name} can jump!` );
    },
};
// 함수는 object에 있는 데이터가 아니여서 포함X
json = JSON.stringify( dog );
console.log( json ); //{"name":"coco","color":"blue","size":null,"birthDate":"2021-07-07T06:45:11.952Z"}

json = JSON.stringify( dog, ['name'] ); //원하는 property만 가능
console.log( json ); // {"name":"coco"}

json = JSON.stringify( dog, (key, value) => { //좀 더 세밀하게 통제하고 싶을 떄 콜백함수 이용
    return key === 'name' ? 'haha' : value;
} )

console.log( json );

// 2. JSON to Object
// parse(json)
console.clear();
json = JSON.stringify( dog );
const obj = JSON.parse( json, ( key, value ) => {
    console.log( key, value );
    return key === 'birthDate'? new Date( value ) : value ;
} );
console.log( obj );
console.log( obj.birthDate.getDate() )
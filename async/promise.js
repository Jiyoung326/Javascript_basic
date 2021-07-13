'use strict';

// Promise is a JavaScript object for asynchronous operation.
// state : pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// when new Promise is c reated, the executor runs automatically.
const promise = new Promise( (resolve, reject) => { //Promise는 만드는 순간 콜백함수 실행됨
    // doing some heavy work ( network, read files )
    console.log( 'doing something ...' );
    setTimeout(() => {
        resolve('good');
        // reject( new Error('no network') );
    }, 2000);
} );

// 2. Consumers: then, catch, finally
promise.then( value => {
        // promise가 정상적으로 수행되어 최종적으로 resolve라는 콜백함수로 전달된 값이 value로 들어옴
        console.log(value) } )
    .catch( error => {
        console.log(error);
    } )
    .finally( () => { // 성공, 실패와 상관없이 수행됨
        console.log('finally');
    });


// 3. Promise chain
const fetchNumber = new Promise( ( resolve, reject ) => {
    setTimeout( ()=> resolve(1), 1000 );
} );

fetchNumber.then( number => number * 2 )
            .then( number => number * 3 )
            .then( number => { //then에서는 값을 전달해도 되고 다른 비동기인 프로미스를 전달해도 된다.
                return new Promise( ( resolve, reject ) => {
                    setTimeout(() => resolve(number -1), 1000);
                } )
            })
    .then(number => console.log( number ));

// 4. Error Handling

const getHen = () =>
    new Promise( ( resolve, reject ) => {
        setTimeout(() => resolve('닭'), 1000);
    } );


// const getEgg = ( hen ) =>
//     new Promise( ( resolve, reject ) => {
//         setTimeout( () => resolve(`${hen} -> 계란`) ,1000 );
//     });

const getEgg = ( hen ) =>
    new Promise( ( resolve, reject ) => {
        setTimeout( () => reject(new Error(`error ! ${hen} -> 계란`)) ,1000 );
    });


const cook = (egg) =>
    new Promise( ( resolve, reject ) => {
        setTimeout( () => resolve(`${egg} -> 요리`), 1000 )
    });

// getHen()
//     .then( hen => getEgg(hen) )
//     .then( egg => cook(egg) )
//     .then( meal => console.log( meal ));

//콜백함수를 전달할 때 받아오는 하나의 value를 다름 함수에 그대로 전달하는 경우 생략 가능
getHen()    //
    .then( getEgg )
    .catch( error => { return '빵' } ) //error시 다른 것을 전달해야 promisechain이 정상으로 흘러감
    .then( cook )
    .then( console.log )
    .catch( console.log );
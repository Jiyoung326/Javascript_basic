'use strict';

//JavaScript is synchronous. 동기적.
//Execute the code block in order after hoisting

// hoisting : var, function declaration 이 위로 올라가는 것.

console.log('1');
setTimeout( function (){
    console.log('2');

}, 1000 );
console.log('3');

//Synchronous callback
function printImmediately( print ){
    print();
}
printImmediately( () => console.log( "hi" ));


//Asynchronous callback
function printWithDelay( print, timeout ){
    setTimeout( print, timeout);
}

printWithDelay( () => console.log( 'hey' ), 1000 );


//Callback HEll example
class UserStorage {
    loginUser( id, password, onSuccess, onError ) {
        setTimeout( () => {
            if( id === 'hjy' && password === 'pwd' ){
                onSuccess( id );
            }else {
                onError( new Error( 'not Found' ) );
            }
        }, 2000);
    }

    getRoles( user, onSuccess, onError ){
        setTimeout(() => {
            if ( user === 'hjy' ) {
                onSuccess(user);
            }else {
                onError( new Error( 'no access' ) );
            }
        }, 2000);
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt( 'enter your password' );
userStorage.loginUser( id, password, (user) => {
    userStorage.getRoles(user, (userWithRole))
}, error => console.log( error ) )
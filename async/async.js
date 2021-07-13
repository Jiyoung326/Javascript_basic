// async & await
// clear style of using promise

// 1. async
// function fetchUser(){
//     // do network reqeust in 10 secs...
//     return new Promise( ( resolve, reject ) => {
//         resolve('hey');
//     });
// }

async function fetchUser(){ //async를 쓰면 promise를 바로 만드는 효과
    // do network reqeust in 10 secs...
    return 'hey';
}

const user = fetchUser();
// user.then(console.log);
console.log( 'user : ', user );

//2. await
function delay(ms) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}

async function getApple() {
    await delay(2000 );
    // throw 'error';
    return '사과';
}

async function getBanana() {
    await delay( 1000 );
    return '바나나';
}

async function getBanana2() {
    return delay(3000).then(() => '바나나');
}

function pickFruits() { //콜백지옥 처럼됨
    return getApple()
        .then( apple => {
            return getBanana().then( banana => `pickFruits ${apple} + ${banana}` );
        } )
}

async function pickFruits2() {
    const applePromise = getApple(); // 바로 프로미스를 만들어서
    const bananaPromise = getBanana(); // 사과와 바나나가 병렬적으로 실행

    const apple = await applePromise; // 이제 동기화를 시켜줌
    const banana = await bananaPromise;
    return `pickFruits2 ${apple} + ${banana}`;
}
pickFruits().then( console.log );

pickFruits2().then( console.log );

// 3. useful Promise APIs
function pickAllFruits(){
    return Promise.all( [getApple(), getBanana()] )
        .then( fruits => fruits.join() )// 모든 Promise들이 병렬적으로 다 받을 때 까지 모아줌
}

pickAllFruits().then( console.log );

function pickOnlyOne() {
    return Promise.race( [getApple(), getBanana()] );
}

pickOnlyOne().then( console.log );

















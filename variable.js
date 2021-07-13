// 1. use strict
// added in ES 5
// use this for Vanilla Javascript
'use strict'; //상식적으로 코드를 짜도록 도와줌. ex) 선언하지 않은 변수 사용시 에러

//2. varible, rw(read/write) 메모리에 읽고 쓰기가 가능
// let (added in ES6) / mutable type
// global 변수는 최소한으로 쓰는 것이 좋다. 어플리케이션이 시작, 끝날 때까지 항상 메모리에 탑재되어있기 때문이다.
// 가능하면 필요한 local 범위 내에서 local 변수로 사용해서 쓰도록 하자.
let globalname = 'global name';
{
    //블럭 안에서 선언된 변수는 블럭 밖에서 사용 불가능. local
    let name = 'hena';
    console.log(name); 
    name = 'hello';
    console.log(name);
    console.log(globalname);
}
console.log(name);
console.log(globalname);
// var (사용하지 말기!!)
// var hoisting (변수 사용을 먼저 하고 나중에 선언을 해도 선언이 가장 위로 끌어 올려짐)
// var는 block scope이 없다. 블록 안에서 선언한 변수를 밖에서도 사용가능. 위험부담이 생긴다.
 
//3.Constant 값을 선언하고 할당한 후, 값을 바꿀 수 없다.(=immutable type), r(read only)
const daysInWeek = 7;
const maxNumber = 5;

// Note !
// Immutable data types : primitive types, frozen objects ( i.e. object.freeze() ) // 데이터를 통째로 메모리에 올리지 'hello'의 e만 a로 바꾸는 것이 아님.
// mutable data types : all objects by default are mutable in JS
// flavor immutable data type always for a few reasons :
// - security ,
// - tread safety : 한 process의 다양한 tread들이 동시에 변수에 접근해서 사용, 변경하는 경우 위험할 수 있다.
// - reduce human mistakes

//4. varialbe types
//primitive type( single item ): number, string, boolean, null, undefined, symbol
//object( box container ) : single iem을 여러개 묶어서 한 박스로 관리할 수 있게 해줌.
//function( firtst-class function 지원 : function도 다른 데이터 타입처럼 변수에 할당이 가능하는 뜻)

//primitive type? 더이상 작은 단위로 나눌 수 없는 한 가지 item. 값 자체가 메모리에 저장된다.
//object ? reference가 메모리에 저장된다. reference가 실제 값들이 담겨있는 메모리들을 가르키고 있다.
let count = 18; //integer
let size = 15.6 //decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

//number - special numeric values : infinity, -infinity, NaN
let infinity = 4 / 0;
let negativeInfinity = -1 / 0;
let nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

//bigInt (fairy new, don't use yet) 최근에 추가된 타입. 아직 지원 안되는 브라우저 많음!
let bigint = 1234567890123456789012345678901234567890n; //over (-2^53 ~ 2^53)
console.log(`value: ${bigint}, type: ${typeof bigint}`);

//string
let char = 'c'; //다른 언어와 달리 한 글자도 string
let brendan = 'brendan';
let greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
let helloBob = `hi! ${brendan}`; //template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

//boolean
//false: 0, null, undefined, NaN, ''
//true: any other
let canRead = true;
let test = 3 < 1 ; //false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

//null
//null로 값이 할당된 경우. 명확하게 비어있는 값임을 지정
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

//undefined
//선언은 되었지만 값이 지정되어 있지 않은 경우. 비어있는지, 값이 정해지지 않았는지 지정되있지 않은 상태
let x = undefined; 
let y ; //undefined
console.log(`value: ${x}, type: ${typeof x}`);
console.log(`value: ${y}, type: ${typeof y}`);

//symbol, create unique identifiers for objects
//map이나 다른 자료구조에서 고유한 식별자가 필요하거나 동시 다발적으로 일어날 수 있는 코드에서
//우선 순위를 주고 싶을 때, 정말 고유한 식별자가 필요할 때 쓰임.
let symbol1 = Symbol('id'); //주어진 string에 상관 없이 고유한 식별자 만들어짐
let symbol2 = Symbol('id');
console.log(symbol1 === symbol2); //false

//string이 똑같다면 동일한 symbol을 만들고 싶다면?
let gSymbol1 = Symbol.for('id');
let gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); //true

//출력시 항상 .description으로 string으로 변환해서 출력해야한다.
console.log(`value: ${symbol1.description}, type: ${typeof symbol1.description}`); 

//object, real-life object, data structure
const jake = { name : 'jake', age: 22};
console.log(`value: ${jake}, type: ${typeof jake}`);

//5.Dynamic typing : dynamically typed language.
// 변수를 선언할 떄 어떤 타입인지 정하지 않고 할당되는 값에 따라서 타입이 변경될 수 있음을 의미.
let text = 'hello';
console.log(text.charAt(0)); //h
console.log(`value: ${text}, type: ${typeof text}`); //string
text = 1;
console.log(`value: ${text}, type: ${typeof text}`); //number
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`); //string 75
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`); //number 4
//console.log(text.charAt(0)); //runtime으로 타입이 정해지기 때문에 error
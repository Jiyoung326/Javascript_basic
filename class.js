'use strict';
// Object-oriented programming
// class : template
// object : instance of a class
// JavaScript classes
// - introduced in ES6
// = syntactical sugar over prototyped-based inheritance

// 1. Class declarations
class Person {

    //constructor
    constructor( name, age ) {
        //fields
        this.name = name;
        this.age = age;
    }

    // methods
    speak() {
        console.log( `${this.name}: hello` );
    }

}

const person1 = new Person( 'mia', 22 );
console.log( person1.name );
console.log( person1.age );
person1.speak();

// 2. Getter, Setter
class User {

    constructor( name, age ) {
        this.name = name;
        this.age = age;
    }

    get age(){
        //getter를 정의한 순간 this.age는 메모리에 있는 age를 읽어오는 것이 아니라 getter를 호출하게 된다.
        return this._age; //field 명
    }

    set age( value ){
        //setter를 정의한 순간, 바로 메모리에 값을 할당하는 것이 아니라 (=)할당 시 setter를 호줄한다.
        // this.age = value; 이렇게 그대로 쓰면 callstack이 꽉참. 그래서 getter나 setter안의 변수의 이름을 다르게 써줌.

        this._age = value < 0 ? 0 : value;
    }

}

const user1 = new User( 'henna', -1 );
console.log( user1.age ); //field 명은 _name이지만 getter, setter를 내부적으로 이용하기 때문에 .name으로 호출할 수 있다.

// 3. Fields (public, private) 최근에 추가된 것. 쓰려면 babel이용해야함
class Experiment {
    publicField = 2;
    #privateField = 0; //class 내부에서만 값이 접근, 변경가능
}

const experiment = new Experiment();
console.log( experiment.publicField );
console.log( experiment.privateField); //undefined

// 4. Static properties and methods. 최근에 추가됨
class Article {
    static publisher = 'Hello world'; //Object 마다 있는 것이 아니라 class 자체에 갖고 있음
    //Object에 상관 없이 공통적으로 class에서 쓸 수 있는 것은 static으로 하는 것이 효율적. 메모리 사용을 줄여준다.

    constructor( articleNumber ) {
        this.articleNumber = articleNumber;
    }

    static printPublisher(){
        console.log( Article.publisher );
    }
}

const article1 = new Article( 1 );
const article2 = new Article( 2 );
console.log( article1.publisher ); //undefined
console.log( Article.publisher );
Article.printPublisher();

// 5. Inheritance
// a way for one class to extend another class
class Shape {
    constructor( width, height, color ) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color!`);
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
    draw() {
        super.draw(); // 부모 메소드 호출
        console.log('세모');
    }

    getArea() {// overriding
        // return super.getArea()/2;
        return ( this.width * this.height ) / 2;
    }

    toString(){ //Object 에 있는 toString overriding
        return `Triangle : color ${this.color}`;
    }
}

const rectangle = new Rectangle( 20, 20, 'blue' );
rectangle.draw();
console.log( rectangle.getArea() );
const triangle = new Triangle( 20, 20, 'red');
triangle.draw();
console.log( triangle.getArea() );

// 6. Class checking : instanceOf
console.log( rectangle instanceof Rectangle ); //true
console.log( triangle instanceof Triangle ); //true
console.log( triangle instanceof Triangle ); //true
console.log( triangle instanceof Shape ); //true
console.log( triangle instanceof Object ); //true. 모든 object들은 object를 상속
console.log( triangle.toString() );


console.clear()

class Counter {

    constructor( runEveryTimeFive ) {
        this.counter = 0;
        this.callback = runEveryTimeFive;
    }

    increase( runIfTimes ) {
        this.counter++;
        console.log( this.counter );
        if( this.counter % 5 === 0 ){
            this.callback( this.counter );
        }
    }
}

function printSomething( num ){
    console.log(`alert! ${num}`);
}
const coolCounter = new Counter( printSomething );
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
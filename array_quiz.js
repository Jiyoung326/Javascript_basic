// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    console.log( fruits.join(', ') );
}

// Q2. make an array out of a string
{
    const fruits = '🍎, 🥝, 🍌, 🍒';
    console.log( fruits.split(',') );
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
    const array = [1, 2, 3, 4, 5];
    console.log( array.reverse() );
}

// Q4. make new array without the first two elements
{
    const array = [1, 2, 3, 4, 5];
    console.log( array.slice(2, 5) );
}

class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}
const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
    for( let student of students ){
        if( student.score === 90 ){
            console.log( student )
        }
    }

    const result = students.find( (student,index) => student.score === 90 );
}

// Q6. make an array of enrolled students
{
    console.log( students.filter(( student, index ) => student.enrolled ) );
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
    let arr = [];
    for ( let student of students ) {
        arr.push( student.score )
    }
    console.log( arr );
    console.log( students.map( student => student.score ) );
}

// Q8. check if there is a student with the score lower than 50
{
    for ( let student of students ) {
        if ( student.score < 50){
            console.log( student )
        }
    }

    console.clear();
    const result = students.some( (student) => student.score < 50 ); // 하나라도 만족되면 될 때
    console.log( result );
    const result2 = !students.every( (student) => student.score >= 50 ); //모든 조건이 만족해야 할때
    console.log( result2 );
}

// Q9. compute students' average score
{
    let sum  = 0;
    for ( let student of students ) {
        sum += student.score;
    }
    console.log( sum/students.length );

    console.clear();

    const result = students.reduce( ( prev, curr ) => {
        console.log( prev, curr );
        return prev + curr.score ;
    }, 0);
    console.log( result/students.length );
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
    let arr = students.map( student => student.score );
    console.log( arr.join( ', ' ) )
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
    let arr = students.map( student => student.score ).sort();
    console.log( arr );
}
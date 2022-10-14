// using object literal
const student = { name: 'Shakib Al Hasan', Job: 'cricketer' };
// constructor
const person = new Object();
console.log(person);

//
const human = Object.create(student);
console.log(human.Job);

// class is Syntactical Sugar
class People {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const peop = new People('leon', 24);
console.log(peop);

//function 
function Manus(name1, age1) {
    this.name = name1;
    this.age = age1;
}
const man = new Manus('Leon', 21);
console.log(man);
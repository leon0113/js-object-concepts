// using object literal
const student = { name: 'Shakib Al Hasan', Job: 'cricketer' };
// constructor
const person = new Object();
console.log(person);

//
const human = Object.create(student);
console.log(human.Job);

// class i Syntactical Sugar
class People {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const peop = new People('leon', 24);
console.log(peop);

//function 
function Manus(name) {
    this.name = name;
}
const man = new Manus('Leon');
console.log(man);
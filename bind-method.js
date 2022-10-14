const student = {
    name: 'Tahjib',
    balance: 5000,
    id: 101,
    treat: function (expense) {
        this.balance = this.balance - expense;
        console.log(this);
        return this.balance;
    }
}

const student1 = {
    name: 'leon',
    id: 102,
    balance: 7000,
}
const student2 = {
    name: 'Hossain',
    id: 103,
    balance: 9000,
}

student.treat(100);

const student1Treat = student.treat.bind(student1);
const student2Treat = student.treat.bind(student2);
// student1Treat(98);
student1Treat(980);
student2Treat(9800);

student.treat(1050);


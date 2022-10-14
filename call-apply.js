const student = {
    name: 'Tahjib',
    balance: 5000,
    id: 101,
    treat: function (expense, tip) {
        this.balance = this.balance - expense - tip;
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
//!  call()
student.treat.call(student1, 500, 50);
student.treat.call(student1, 700, 30);



student.treat.call(student2, 750, 35);

//! apply()
student.treat.apply(student1, [700, 30]);
student.treat.apply(student1, [900, 40]);
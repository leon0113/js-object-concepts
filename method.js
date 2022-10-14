const student = {
    name: 'Tahjib',
    balance: 5000,
    id: 101,
    major: 'Math',
    isRich: false,
    subjects: ['English', 'Economics', 'math'],
    bestFriend: {
        name: 'leon',
        major: 'Math'
    },
    takeExam: function () {
        console.log(this.bestFriend.name, 'taking exam');
    },
    treat: function (expense, tip) {
        this.balance1 = this.balance - expense - tip;
        return this.balance1;
    }
}

student.takeExam();
const remaining1 = student.treat(200, 50);
const remaining2 = student.treat(250, 60);
console.log(remaining2);
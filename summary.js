const pen = {
    brand: 'Matador',
    price: 5,
    writePoem: function (fee) {
        console.log(fee);
    }
};

const keys = Object.keys(pen);
const values = Object.values(pen);

for (const prop in pen) {
    console.log(prop, pen[prop]);
}

const a = { a: 1 };
const b = { a: 1 };
const c = a;
if (a === b) {
    console.log('EQua');
}


const aBounded = pen.writePoem.bind(a);
aBounded();
// call()  apply()
// this
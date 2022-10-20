const bottle = {
    color: 'yellow',
    hold: 'water',
    price: 50,
    isClean: true
};
//! getting all properties names

const keys = Object.keys(bottle);
// console.log(keys);
//! getting all values

const values = Object.values(bottle);
// console.log(values);
//! getting key value pairs

const pairs = Object.entries(bottle);
// console.log(pairs);
//! to delete a property

delete bottle.isClean;
// console.log(bottle);

//! prevent from deletation
Object.seal(bottle);
delete Object.price;
// seal () prevent from deletation but let change the values
// seal () prevent from inserting new property
// Object.freeze(bottle); freeze()  It also does not allow to change ther values

bottle.price = 30;
// console.log(bottle);
const bottle = {
    color: 'yellow',
    hold: 'water',
    price: 50,
    isClean: true
};

/* 
! for( let i=0;i<10;i++){}
! for(const num of numbers){} // used in array
! for(const prop in student){} // used in object
*/
for (const prop in bottle) {
    console.log(prop, bottle[prop]);
}

const keys = Object.keys(bottle);
for (const key of keys) {
    // console.log(key);
};

//! Advance
const entries = Object.entries(bottle);
// console.log(entries);
for (const [key, values] of Object.entries(bottle)) {
    // console.log(key, values)
}
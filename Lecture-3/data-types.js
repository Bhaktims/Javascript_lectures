// Boolean
const a = true;
const b = false;
// console.log(a);
// console.log(b);

// object
const obj = {    // object literal - constant value
    key1: 'Val1',
    name: 'Pranit',
    x: 10,
    y: true,
    val1: {
        a: 20,
        b: 30
    },
    0: 50,
    true: 70,
    1:56
};
console.log(obj);
console.log(obj.key1);
console.log(obj.name);
console.log(obj['x']); // key are always string
console.log(obj.x);
console.log(obj.val1.a);
console.log(obj['0']);
console.log(obj['true']); // for boolean and numeric key we hv to use [' ']
// console.log(obj.1); // this will not consider
console.log(obj[1]);
console.log(typeof a);
console.log(typeof obj);

// // null - its a value , memory is occupied
const x = null;
// console.log(x);

// // undefined - state of variable , no memory occupied
let y;
// console.log(y);
// y = undefined;
// console.log(y);

console.log(typeof x);  // object
console.log(typeof y);  //undefined
// var a = undefined; // hoisted -> variable a us in temporal deadzone ( Memory allocated & deadzone of a)
// console.log(a); // a is not in temporal deadzone
// var a =20;
// console.log(a);


// let b; // hoisted - b is in temporal deadzone ( memory not allocated)
// console.log(b);

// n = Infinity;
// console.log(n);

// console.log('1'+1+2) //112

let x = '20';
console.log(+ x + 20);

console.log(NaN + 1);

xname = `acbjcbkjcnlakcnaklcndnckdnn`

zname = `
<h1>
Hello all ${xname}
${45+96}
${Math.random()}
</h1>`

console.log(zname);

let fruits=[];
fruits[12]="orange";
console.log(fruits.length); //13
console.log(fruits);

const arr=[1,2,3];
console.log(arr.length) //3
arr.length = 6; // if u increase the length the array will increase making rest values are empty
console.log(arr);
arr.length=2; //// if u decrease the length the array will truncate
console.log(arr);

let x = '123'; let y = Number(x); console.log(typeof y);

let a = [1, 2]; let b = [...a]; b[0] = 10; console.log(a[0]);
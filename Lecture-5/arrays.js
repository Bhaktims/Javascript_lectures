// collection of data

const arr=[1,2,3,4,5];
console.log(arr);
console.log(arr[2]);
arr[0]=100;
console.log(arr);

const arr1=[23.63,'bhakti',false,89,[1,2,3],{key:'val1'}];
console.log(arr1);
console.log(arr1[5].key) //val1


console.log(arr1.length);
console.log(arr1);

arr3=[1,'Hello',true,[2,3],{key2:'val2'}];
console.log(arr3.toString());
console.log(arr3.join('/*/'));

const arr2=[1,2,3,6.3,96.2];
console.log(arr2);
arr2.push(9685,78,85); // add element at the end
console.log(arr2);
arr2.pop();  // delete element at the end
console.log(arr2);

arr2.shift();  // delete 1 st element at the start
console.log(arr2);
arr2.unshift(258,896,854799); // add element at the start
console.log(arr2);


// splice method 
const fruit = ['Chicoo','Apple','Banana','Grapes','Guava'];
console.log(fruit);
fruit.splice(2,0,'Mango'); // when we specify 0 it will not delete any element only it will insert at 2nd position
console.log(fruit); 
fruit.splice(-2,1,'Orange');
console.log(fruit); 
fruit.splice(-2,2,'Cherry');
console.log(fruit); //(1.02)


// slice method - give perticular part form the array
const fruits = ['Chicoo','Apple','Banana','Grapes','Guava'];
console.log(fruits.slice(2,5)) //[ 'Banana', 'Grapes', 'Guava' ]
console.log(fruits.slice(0,2))  //[ 'Chicoo', 'Apple' ]
console.log(fruits.slice(0)) // all arrays
console.log(fruits.slice(2)) // everything from 2nd index


// merge arrays
const a = [1,2,3,4,5,6]
const b = [9,8,7,6,5,4,3,2,1]

const mergearr =a.concat(b);
console.log(mergearr);

const c = [1.2,5.6,8.9]
const mergearr2 = c.concat(b,a)
console.log(mergearr2)

const multiDarr = [
    [1,2],
    [5.6,8.9,9.6],
    [700,800,7000]
]

console.log(multiDarr.flat()); // to flatten multidimensional array to single dimensionl array

// normal function

// function add(){
//     x=a+b;
// }

// anonymous function

// const add=function(){
//     x=a+b;
// }

// IIFE - Immediately invoked function expression

(function() {
    var a = 10;
    console.log('IIEF');
})();

// arrow function

const add= ()=>{ x=a+b; console.log(a+b)}

const sum1 = function(a,b){
    return a+b;
}

const sum2 =(a,b)=>a+b;

console.log(sum2(10,200));

const fun3=(a,b)=>{
    console.log('fun3');
    return a*b
}

console.log(fun3(8,6)) //48



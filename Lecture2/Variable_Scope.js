// let a =10;
// var b = 20;
// const c =30;

// console.log(a);
// console.log(b);
// console.log(c);

// global scope
// var a = 10;
// console.log(a);

// block scope - var is not block scope
// let is block scope
{
    //block
}
for(var i = 0; i<5;i++){
    
}
console.log(i); //5

for(let a = 0; a<5;a++){
    
}
console.log(a); // Referencerror

// function scope -local scope

function fun1(){
    var x = 10+36;
    console.log(x);
    let y = 2+3;
    console.log(y);
}

fun1();
console.log(x); //error
console.log(y);  //error
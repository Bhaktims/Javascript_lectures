// timer function - execute some task after sometime, they are asynchronous function, they execute seperately

console.time('timer');
setTimeout(()=>{
    console.log("HEllo form timer function settimeout")

},500)

// function fun1(){
//     console.log("Fun1");
// }

// fun1();

for (let i=0; i < 1e10 ;i++){}// its blocking the code - do not ever write such blocking codesin main method

console.log("hi")  // first main thread will run then time function will run, even if u rite timer 0 

console.timeEnd('timer');

